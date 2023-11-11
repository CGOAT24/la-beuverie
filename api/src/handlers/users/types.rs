use serde::{Deserialize, Serialize};

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