use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct CreateDrinkRequest {
    pub name: String,
    pub ingredients: Vec<String>,
    pub tags: Vec<String>,
    pub directions: String
}