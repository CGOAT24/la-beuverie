use serde::{Deserialize, Serialize};
use crate::models::model::Model;

#[derive(Serialize, Deserialize, Clone)]
pub struct Drink {
    #[serde(rename(deserialize = "_id"))]
    pub id: uuid::Uuid,
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}

impl Model for Drink {
    type Type = Drink;

    fn get_id(&self) -> uuid::Uuid {
        self.id
    }
}