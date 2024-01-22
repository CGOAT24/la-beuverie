use serde::Serialize;
use crate::models::user::User;

#[derive(Serialize)]
pub struct UserDto {
    pub id: String,
    pub name: String,
    pub email: String
}

impl UserDto {
    pub fn new(model: User) -> Self {
        UserDto {
            id: model.id.unwrap().to_string(),
            name: model.name,
            email: model.email,
        }
    }
}