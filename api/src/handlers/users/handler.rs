use actix_web::{get, HttpResponse, post, Responder, web};
use argon2::{Argon2, PasswordHash, PasswordVerifier};
use crate::extractors::claims::Claims;
use crate::handlers::users::service;
use crate::handlers::users::types::{CreateUserRequest, LoginUserRequest};

#[get("/me")]
pub async fn get(_claims: Claims) -> impl Responder {
    HttpResponse::Ok()
}

#[post("")]
pub async fn create(request: web::Json<CreateUserRequest>) -> impl Responder {
    let user = service::create(request.0).await;
    HttpResponse::Ok().json(user)
}

#[post("/login")]
pub async fn login(request: web::Json<LoginUserRequest>) -> impl Responder {
    if let Some(user) = service::get_from_email(request.0.email).await {
        let parsed = PasswordHash::new(&user.password).unwrap();
        if Argon2::default().verify_password(request.0.password.as_bytes(), &parsed).is_ok() {
            let response = service::get_token().await;
            return HttpResponse::Ok().json(response);
        }
    }
    HttpResponse::BadRequest().body("credentials are invalid")
}