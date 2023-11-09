use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct ValidateUserRequest {
    name: String,
    email: String,
    password: String
}