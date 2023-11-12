use serde::{Deserialize, Serialize};
use crate::handlers::types::Dto;
use crate::models::user::User;

#[derive(Serialize, Deserialize)]
pub struct CreateUserRequest {
    pub name: String,
    pub email: String,
    pub password: String
}

#[derive(Serialize, Deserialize, Clone)]
pub struct LoginUserRequest {
    pub email: String,
    pub password: String
}

#[derive(Serialize, Deserialize)]
pub struct UpdateUserRequest {
    id: String,
    name: String,
    email: String,
    password: String
}

#[derive(Serialize, Deserialize)]
pub struct ValidateUserRequest {
    name: String,
    email: String,
    password: String
}

#[derive(Serialize, Deserialize)]
pub struct AuthResponse {
    access_token: String,
    token_type: String,
    expires_in: i32
}

#[derive(Serialize)]
pub struct UserDto {
    id: String,
    name: String,
    email: String
}

impl Dto for UserDto {
    type Model = User;

    fn from_model(model: Self::Model) -> Self {
        UserDto {
            id: model.id,
            name: model.name,
            email: model.email
        }
    }
}