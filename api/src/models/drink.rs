use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};
use crate::models::model::Model;

#[derive(Serialize, Deserialize, Clone)]
pub struct Drink {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}

impl Model for Drink {
    type Type = Drink;

    fn get_id(&self) -> ObjectId {
        self.id.unwrap()
    }

    fn set_id(&mut self, id: ObjectId) {
        self.id = Some(id);
    }
}