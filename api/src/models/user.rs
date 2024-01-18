use mongodb::bson::oid::ObjectId;
use serde::{Serialize, Deserialize};
use crate::models::model::Model;

#[derive(Serialize, Deserialize, Clone)]
pub struct User {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub name: String,
    pub email: String,
    pub password: String
}

impl Model for User {
    type Type = User;

    fn get_id(&self) -> ObjectId {
        self.id.unwrap()
    }

    fn set_id(&mut self, id: ObjectId) {
        self.id = Some(id);
    }
}