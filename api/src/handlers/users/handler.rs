use actix_web::{get, HttpResponse, post, Responder, web};
use crate::requests::create_user_request::CreateUserRequest;
use crate::services;

#[get("/me")]
pub async fn get() -> impl Responder {
    HttpResponse::Ok()
}

#[post("")]
pub async fn create(body: web::Json<CreateUserRequest>) -> impl Responder {
    let user = services::user::create(body.0).await;
    HttpResponse::Ok().json(user)
}