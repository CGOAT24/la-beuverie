use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct LoginUserRequest {
    pub email: String,
    pub password: String
}