use actix_web::{get, HttpResponse, post, Responder, web};
use crate::extractors::claims::Claims;
use crate::handlers::users::service;
use crate::handlers::users::types::CreateUserRequest;

#[get("/me")]
pub async fn get(_claims: Claims) -> impl Responder {
    HttpResponse::Ok()
}

#[post("")]
pub async fn create(body: web::Json<CreateUserRequest>) -> impl Responder {
    let user = service::create(body.0).await;
    HttpResponse::Ok().json(user)
}