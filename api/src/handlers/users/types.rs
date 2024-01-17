use serde::Serialize;
use crate::models::user::User;

#[derive(Serialize)]
pub struct UserDto {
    pub id: uuid::Uuid,
    pub name: String,
    pub email: String
}

impl UserDto {
    pub fn new(model: User) -> Self {
        UserDto {
            id: model.id,
            name: model.name,
            email: model.email,
        }
    }
}