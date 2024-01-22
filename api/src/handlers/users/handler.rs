use actix_web::{get, HttpMessage, HttpRequest, HttpResponse, Responder, web};
use mongodb::bson::oid::ObjectId;
use crate::AppState;
use crate::handlers::response::{Response, Status};
use crate::handlers::users::types::UserDto;
use crate::repository::repo::Repo;
use crate::utils::jwt_auth;

#[get("/me")]
async fn me(
    req: HttpRequest,
    data: web::Data<AppState>,
    _: jwt_auth::JwtMiddleware,
) -> impl Responder {
    let ext = req.extensions();
    let user_id = ext.get::<ObjectId>().unwrap();

    let user = data.db.users.get(*user_id).await.unwrap();

    HttpResponse::Ok().json(Response::with_data(Status::SUCCESS, UserDto::new(user)))
}