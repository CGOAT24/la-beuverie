use serde::{Deserialize, Serialize};
use crate::handlers::types::Dto;
use crate::models::drink::Drink;

#[derive(Serialize, Deserialize)]
pub struct CreateDrinkRequest {
    pub name: String,
    pub ingredients: Vec<String>,
    pub tags: Vec<String>,
    pub directions: String
}

#[derive(Serialize, Deserialize)]
pub struct UpdateDrinkRequest {
    pub id: String,
    pub name: String,
    pub ingredients: Vec<String>,
    pub tags: Vec<String>,
    pub directions: String
}

#[derive(Serialize, Deserialize)]
pub struct ValidateDrinkRequest {
    pub name: String,
    pub ingredients: Vec<String>,
    pub tags: Vec<String>,
    pub directions: String
}

#[derive(Serialize)]
pub struct DrinkDto {
    pub id: String,
    pub name: String,
    pub ingredients: Vec<String>,
    pub tags: Vec<String>,
    pub directions: String
}

impl Dto for DrinkDto {
    type Model = Drink;

    fn from_model(model: Self::Model) -> Self {
        DrinkDto {
            id: model.id,
            name: model.name,
            ingredients: model.ingredients,
            tags: model.tags,
            directions: model.directions
        }
    }
}

#[derive(Serialize)]
pub struct DrinkNameDto {
    pub id: String,
    pub name: String
}

impl Dto for DrinkNameDto {
    type Model = Drink;

    fn from_model(model: Self::Model) -> Self {
        DrinkNameDto {
            id: model.id,
            name: model.name
        }
    }
}