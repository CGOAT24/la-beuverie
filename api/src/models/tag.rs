use bson::{doc, Document};
use serde::{Deserialize, Serialize};
use crate::models::model::Model;

#[derive(Serialize, Deserialize)]
pub struct Tag {
    id: String,
    value: String
}

impl Model for Tag {
    type Type = Tag;

    fn to_document(&self) -> Document {
        doc! {
            "id": &self.id,
            "value": &self.value
        }
    }

    fn new(doc: Document) -> Self::Type {
        Tag {
            id: doc.get("id").unwrap().to_string(),
            value: doc.get("value").unwrap().to_string(),
        }
    }
}