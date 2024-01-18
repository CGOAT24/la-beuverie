use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};
use crate::models::drink::Drink;
use utoipa::ToSchema;

#[derive(Serialize, Deserialize, ToSchema)]
pub struct DrinkDto {
    pub id: ObjectId,
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}

impl DrinkDto {
    pub fn new(model: Drink) -> Self {
        DrinkDto {
            id: model.id.unwrap(),
            name: model.name,
            directions: model.directions,
            tags: model.tags,
            ingredients: model.ingredients
        }
    }
}

#[derive(Serialize, Deserialize, ToSchema)]
pub struct CreateDrink {
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}

#[derive(Serialize, Deserialize, ToSchema)]
pub struct UpdateDrink {
    pub id: uuid::Uuid,
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}