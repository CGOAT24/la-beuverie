use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct User {
    id: String,
    name: String,
    email: String,
    password: String
}