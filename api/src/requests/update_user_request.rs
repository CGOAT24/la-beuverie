use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct UpdateUserRequest {
    id: String,
    name: String,
    email: String,
    password: String
}