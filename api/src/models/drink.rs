use bson::{doc, Document};
use serde::{Deserialize, Serialize};
use crate::mongo_client::mongo_client::FromDocument;

#[derive(Serialize, Deserialize)]
pub struct Drink {
    pub(crate) id: String,
    pub(crate) name: String,
    pub(crate) directions: String,
    pub(crate) tags: Vec<String>,
    pub(crate) ingredients: Vec<String>
}

impl Drink {
    pub fn to_document(&self) -> Document {
        doc! {
            "id": &self.id,
            "name": &self.name,
            "directions": &self.directions,
            "tags": &self.ingredients,
            "ingredients": &self.ingredients
        }
    }

    pub fn new(doc: Document) -> Drink {
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

impl FromDocument for Drink {
    type Type = Drink;

    fn from_document(document: Document) -> Self::Type {
        Drink::new(document)
    }
}

