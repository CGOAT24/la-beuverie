use actix_web::{get, HttpResponse, Responder, web};
use serde_json::json;
use crate::AppState;
use crate::utils::jwt_auth;

#[get("")]
async fn get_all(_: jwt_auth::JwtMiddleware, data: web::Data<AppState>) -> impl Responder {
    let tags = data.db.tags.get_all().await;
    let response = json!({ "data": tags});
    HttpResponse::Ok().json(response)
}