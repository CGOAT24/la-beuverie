use argon2::{Argon2, PasswordHash, PasswordVerifier};
use serde_json::json;
use crate::models::user::User;
use crate::requests::login_user_request::LoginUserRequest;
use actix_web::{
    cookie::Cookie,
    get, post, web, HttpResponse, Responder,
};
use crate::services;
use crate::services::auth::devalidate_jwt;

#[post("/auth/login")]
pub async fn login(body: web::Json<LoginUserRequest>) -> impl Responder {
    let user: User = services::user::get_from_email(body.clone().email).await;

    let parsed_hash: PasswordHash = PasswordHash::new(&user.password).unwrap();
    let is_valid: bool = Argon2::default()
        .verify_password(body.clone().password.as_bytes(), &parsed_hash)
        .map_or(false, |_| true);

    if !is_valid {
        return HttpResponse::BadRequest()
            .json(json!({"status": "fail", "message": "Invalid email or password"}));
    }

    let (token, cookie) = services::auth::create_jwt(user.id);

    HttpResponse::Ok()
        .cookie(cookie)
        .json(json!({"status": "success", "token": token}))
}

#[get("/auth/logout")]
pub async fn logout() -> impl Responder {
    let cookie: Cookie = devalidate_jwt();

    HttpResponse::Ok()
        .cookie(cookie)
        .json(json!({"status": "success"}))
}