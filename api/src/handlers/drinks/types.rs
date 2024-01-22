use serde::{Deserialize, Serialize};
use crate::models::drink::Drink;

#[derive(Serialize, Deserialize)]
pub struct DrinkDto {
    pub id: String,
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}

impl DrinkDto {
    pub fn new(model: Drink) -> Self {
        DrinkDto {
            id: model.id.unwrap().to_string(),
            name: model.name,
            directions: model.directions,
            tags: model.tags,
            ingredients: model.ingredients
        }
    }
}

#[derive(Serialize, Deserialize)]
pub struct CreateDrink {
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}

#[derive(Serialize, Deserialize)]
pub struct UpdateDrink {
    pub id: String,
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}