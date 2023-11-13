use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct CreateUserRequest {
    pub name: String,
    pub email: String,
    pub password: String
}

#[derive(Serialize, Deserialize, Clone)]
pub struct GetAccessTokenRequest {
    pub email: String,
    pub password: String
}

#[derive(Serialize, Deserialize)]
pub struct AuthResponse {
    access_token: String,
    token_type: String,
    expires_in: i32
}