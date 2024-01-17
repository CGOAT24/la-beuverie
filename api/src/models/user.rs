use serde::{Serialize, Deserialize};
use crate::models::model::Model;

#[derive(Serialize, Deserialize, Clone)]
pub struct User {
    #[serde(rename(deserialize = "_id"))]
    pub id: uuid::Uuid,
    pub name: String,
    pub email: String,
    pub password: String
}

impl Model for User {
    type Type = User;

    fn get_id(&self) -> uuid::Uuid {
        self.id
    }
}