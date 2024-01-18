use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};
use crate::models::user::User;

#[derive(Serialize)]
pub struct UserDto {
    pub id: ObjectId,
    pub name: String,
    pub email: String
}

impl UserDto {
    pub fn new(model: User) -> Self {
        UserDto {
            id: model.id.unwrap(),
            name: model.name,
            email: model.email,
        }
    }
}

#[derive(Serialize, Deserialize)]
pub struct CreateUser {
    pub name: String,
    pub email: String,
    pub password: String
}

#[derive(Deserialize, Serialize)]
pub struct LoginUser {
    pub email: String,
    pub password: String
}