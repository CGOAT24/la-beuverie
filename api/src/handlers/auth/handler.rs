use crate::AppState;
use crate::models::user::User;
use crate::repository::repo::Repo;
use crate::utils::token::TokenClaims;
use actix_web::{
    cookie::{time::Duration as ActixWebDuration, Cookie},
    get, post, web, HttpResponse, Responder,
};
use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};
use chrono::{prelude::*, Duration};
use jsonwebtoken::{encode, EncodingKey, Header};
use serde_json::json;
use crate::handlers::auth::types::{CreateUser, LoginUser};
use types::UserDto;
use crate::handlers::auth::types;
use crate::utils::jwt_auth;

#[post("/register")]
async fn register(
    body: web::Json<CreateUser>,
    data: web::Data<AppState>,
) -> impl Responder {
    let user_email = User {
        id: None,
        email: body.email.to_owned(),
        name: "".to_string(),
        password: "".to_string(),
    };
    let exists: bool = data.db.users.get_from_email(user_email).await.is_some();

    if exists {
        return HttpResponse::Conflict().json(
            json!({"status": "fail","message": "User with that email already exists"}),
        );
    }

    let salt = SaltString::generate(&mut OsRng);
    let hashed_password = Argon2::default()
        .hash_password(body.password.as_bytes(), &salt)
        .expect("Error while hashing password")
        .to_string();
    let new_user = User {
        id: None,
        name: body.name.to_string(),
        email: body.email.to_lowercase(),
        password: hashed_password
    };
    let inserted = data.db.users.create(new_user.to_owned()).await;

    if inserted.id.is_some() {
        let user_response = json!({"status": "success","data": serde_json::json!({
                "user": UserDto::new(new_user)
            })});

        return HttpResponse::Ok().json(user_response);
    }
    HttpResponse::InternalServerError()
        .json(json!({"status": "error","message": "Error while creating new user"}))
}

#[post("/login")]
async fn login(body: web::Json<LoginUser>, data: web::Data<AppState>, ) -> impl Responder {
    let login_info = data.db.users.get_from_email(User {
        id: None,
        email: body.email.to_owned(),
        name: "".to_string(),
        password: "".to_string()

    }).await;

    let is_valid = login_info.to_owned().map_or(false, |user| {
        let parsed_hash = PasswordHash::new(&user.password).unwrap();
        Argon2::default()
            .verify_password(body.password.as_bytes(), &parsed_hash)
            .map_or(false, |_| true)
    });

    if !is_valid {
        return HttpResponse::BadRequest()
            .json(json!({"status": "fail", "message": "Invalid email or password"}));
    }

    let user = login_info.unwrap();

    let now = Utc::now();
    let iat = now.timestamp() as usize;
    let exp = (now + Duration::minutes(60)).timestamp() as usize;
    let claims: TokenClaims = TokenClaims {
        sub: user.id.unwrap().to_string(),
        exp,
        iat,
    };

    let token = encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(data.env.jwt_secret.as_ref()),
    )
        .unwrap();

    let cookie = Cookie::build("token", token.to_owned())
        .path("/")
        .max_age(ActixWebDuration::new(60 * 60, 0))
        .http_only(true)
        .finish();

    HttpResponse::Ok()
        .cookie(cookie)
        .json(json!({"status": "success", "token": token}))
}

#[get("/logout")]
async fn logout(_: jwt_auth::JwtMiddleware) -> impl Responder {
    let cookie = Cookie::build("token", "")
        .path("/")
        .max_age(ActixWebDuration::new(-1, 0))
        .http_only(true)
        .finish();

    HttpResponse::Ok()
        .cookie(cookie)
        .json(json!({"status": "success"}))
}
