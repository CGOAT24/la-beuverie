use actix_web::{HttpResponse, post, Responder, web};
use argon2::{Argon2, PasswordHash, PasswordVerifier};
use crate::handlers::auth::service;
use crate::handlers::auth::types::GetAccessTokenRequest;

#[post("/authorize")]
pub async fn login(request: web::Json<GetAccessTokenRequest>) -> impl Responder {
    if let Some(user) = service::get_from_email(request.0.email).await {
        let parsed = PasswordHash::new(&user.password).unwrap();
        if Argon2::default().verify_password(request.0.password.as_bytes(), &parsed).is_ok() {
            let response = service::get_token().await;
            return HttpResponse::Ok().json(response);
        }
    }
    HttpResponse::BadRequest().body("credentials are invalid")
}