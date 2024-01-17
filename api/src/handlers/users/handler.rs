use actix_web::{get, HttpMessage, HttpRequest, HttpResponse, Responder, web};
use serde_json::json;
use crate::{AppState};
use crate::repository::repo::Repo;
use crate::utils::jwt_auth;

#[get("/me")]
async fn me(
    req: HttpRequest,
    data: web::Data<AppState>,
    _: jwt_auth::JwtMiddleware,
) -> impl Responder {
    let ext = req.extensions();
    let user_id = ext.get::<uuid::Uuid>().unwrap();

    let user = data.db.users.get(*user_id).await.unwrap();

    let json_response = json!({
        "status":  "success",
        "data": serde_json::json!({
            "user": crate::handlers::users::types::UserDto::new(user)
        })
    });

    HttpResponse::Ok().json(json_response)
}