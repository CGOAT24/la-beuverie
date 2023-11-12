use bson::doc;
use serde::{Deserialize, Serialize};

use super::model::Model;

#[derive(Serialize, Deserialize)]
pub struct User {
    #[serde(rename = "_id")]
    pub id: String,
    pub name: String,
    pub email: String,
    pub password: String,
}

impl Model for User {
    type Type = User;

    fn to_document(&self) -> bson::Document {
        doc! {
            "id": &self.id,
            "name": &self.name,
            "email": &self.email,
            "password": &self.password,
        }
    }

    fn new(doc: bson::Document) -> Self::Type {
        User {
            id: doc.get_str("id").unwrap().to_string(),
            name: doc.get_str("name").unwrap().to_string(),
            email: doc.get_str("email").unwrap().to_string(),
            password: doc.get_str("password").unwrap().to_string(),
        }
    }
}