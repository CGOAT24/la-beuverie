use actix_web::cookie::Cookie;
use chrono::{Duration, Utc};
use jsonwebtoken::{encode, EncodingKey, Header};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct TokenClaims {
    pub sub: String,
    pub iat: usize,
    pub exp: usize,
}

pub fn create_jwt(id: String) -> (String, Cookie<'static>) {
    let now = Utc::now();
    let iat = now.timestamp() as usize;
    let exp = (now + Duration::minutes(60)).timestamp() as usize;
    let claims: TokenClaims = TokenClaims {
        sub: id,
        exp,
        iat,
    };
    let jwt_secret = std::env::var("JWT_SECRET").unwrap();
    let token = encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(jwt_secret.as_ref()),
    )
        .unwrap();
    let cookie = Cookie::build("token", jwt_secret.to_owned())
        .path("/")
        .max_age(actix_web::cookie::time::Duration::new(60 * 60, 0))
        .http_only(true)
        .finish();
    (token, cookie)
}

pub fn devalidate_jwt() -> Cookie<'static> {
    Cookie::build("token", "")
        .path("/")
        .max_age(actix_web::cookie::time::Duration::new(-1, 0))
        .http_only(true)
        .finish()
}