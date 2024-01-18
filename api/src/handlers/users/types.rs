use mongodb::bson::oid::ObjectId;
use serde::Serialize;
use utoipa::ToSchema;
use crate::models::user::User;

#[derive(Serialize, ToSchema)]
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