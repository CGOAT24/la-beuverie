use actix_web::{get, HttpResponse, post, Responder, web};
use crate::requests::create_user_request::CreateUserRequest;
use crate::services;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(get);
    cfg.service(create);
}

#[get("/api/users/me")]
pub async fn get() -> impl Responder {
    HttpResponse::Ok()
}

#[post("/api/users")]
pub async fn create(body: web::Json<CreateUserRequest>) -> impl Responder {
    let user = services::user::create(body.0).await;
    HttpResponse::Ok().json(user)
}