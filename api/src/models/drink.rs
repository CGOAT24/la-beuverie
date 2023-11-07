use bson::{doc, Document};
use serde::{Deserialize, Serialize};
use crate::models::model::Model;

#[derive(Serialize, Deserialize)]
pub struct Drink {
    pub id: String,
    pub name: String,
    pub directions: String,
    pub tags: Vec<String>,
    pub ingredients: Vec<String>
}

impl Model for Drink {
    type Type = Drink;

    fn to_document(&self) -> Document {
        doc! {
            "id": &self.id,
            "name": &self.name,
            "directions": &self.directions,
            "tags": &self.ingredients,
            "ingredients": &self.ingredients
        }
    }

    fn new(doc: Document) -> Drink {
        let tags = doc.get_array("tags")
            .unwrap()
            .iter()
            .filter_map(|bson| bson.as_str().map(String::from))
            .collect();
        let ingredients = doc.get_array("ingredients")
            .unwrap()
            .iter()
            .filter_map(|bson| bson.as_str().map(String::from))
            .collect();
        Drink {
            id: doc.get("id").unwrap().to_string(),
            name: doc.get("name").unwrap().to_string(),
            directions: doc.get("directions").unwrap().to_string(),
            tags,
            ingredients,
        }
    }
}

