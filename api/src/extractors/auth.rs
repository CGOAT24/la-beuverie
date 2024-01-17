use actix_web::dev::{Service, ServiceRequest, ServiceResponse, Transform};
use actix_web::error::ErrorUnauthorized;
use actix_web::{http, HttpMessage, web};
use futures_util::future::{ready, LocalBoxFuture, Ready};
use std::rc::Rc;
use std::task::{Context, Poll};
use futures_util::FutureExt;

use crate::{utils, AppState};
use crate::models::user::User;
use crate::repository::repo::Repo;
use crate::utils::error::{ErrorMessage, ErrorResponse};

pub struct RequireAuth;

impl<S> Transform<S, ServiceRequest> for RequireAuth
    where
        S: Service<
            ServiceRequest,
            Response = ServiceResponse<actix_web::body::BoxBody>,
            Error = actix_web::Error,
        > + 'static,
{
    type Response = ServiceResponse<actix_web::body::BoxBody>;
    type Error = actix_web::Error;
    type Transform = AuthMiddleware<S>;
    type InitError = ();
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(AuthMiddleware {
            service: Rc::new(service),
        }))
    }
}

pub struct RequireOnlyAdmin;

impl<S> Transform<S, ServiceRequest> for RequireOnlyAdmin
    where
        S: Service<
            ServiceRequest,
            Response = ServiceResponse<actix_web::body::BoxBody>,
            Error = actix_web::Error,
        > + 'static,
{
    type Response = ServiceResponse<actix_web::body::BoxBody>;
    type Error = actix_web::Error;
    type Transform = AuthMiddleware<S>;
    type InitError = ();
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(AuthMiddleware {
            service: Rc::new(service),
        }))
    }
}

pub struct AuthMiddleware<S> {
    service: Rc<S>,
}

impl<S> Service<ServiceRequest> for AuthMiddleware<S>
    where
        S: Service<
            ServiceRequest,
            Response = ServiceResponse<actix_web::body::BoxBody>,
            Error = actix_web::Error,
        > + 'static,
{
    type Response = ServiceResponse<actix_web::body::BoxBody>;
    type Error = actix_web::Error;
    type Future = LocalBoxFuture<'static, Result<Self::Response, actix_web::Error>>;

    fn poll_ready(&self, ctx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        self.service.poll_ready(ctx)
    }

    fn call(&self, req: ServiceRequest) -> Self::Future {
        let token = req
            .cookie("token")
            .map(|c| c.value().to_string())
            .or_else(|| {
                req.headers()
                    .get(http::header::AUTHORIZATION)
                    .map(|h| h.to_str().unwrap().split_at(7).1.to_string())
            });

        if token.is_none() {
            let json_error = ErrorResponse {
                status: "fail".to_string(),
                message: ErrorMessage::TokenNotProvided.to_string(),
            };
            return Box::pin(ready(Err(ErrorUnauthorized(json_error))));
        }

        let app_state = req.app_data::<web::Data<AppState>>().unwrap();
        let user_id = match utils::token::decode_token(
            &token.unwrap(),
            app_state.env.jwt_secret.as_bytes(),
        ) {
            Ok(id) => id,
            Err(e) => {
                return Box::pin(ready(Err(ErrorUnauthorized(ErrorResponse {
                    status: "fail".to_string(),
                    message: e.message,
                }))))
            }
        };

        let cloned_app_state = app_state.clone();
        let srv = Rc::clone(&self.service);

        async move {
            let user_id = user_id.as_str();

            let result = cloned_app_state.db.users.get(uuid::Uuid::parse_str(user_id).unwrap()).await;
            let user = result.ok_or(ErrorUnauthorized(ErrorResponse {
                status: "fail".to_string(),
                message: ErrorMessage::UserNoLongerExist.to_string(),
            }))?;

            req.extensions_mut().insert::<User>(user);
            let res = srv.call(req).await?;
            Ok(res)
        }
            .boxed_local()
    }
}