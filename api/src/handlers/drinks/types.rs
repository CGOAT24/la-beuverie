use serde::{Deserialize, Serialize};

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

#[derive(Serialize, Deserialize, Debug)]
pub struct ValidateDrinkRequest {
    pub name: String,
    pub ingredients: Vec<String>,
    pub tags: Vec<String>,
    pub directions: String
}