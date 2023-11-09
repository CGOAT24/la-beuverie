use bson::doc;
use serde::{Deserialize, Serialize};

use super::model::Model;

#[derive(Serialize, Deserialize)]
pub struct User {
    pub id: String,
    pub name: String,
    pub email: String,
    pub password: String,
    pub email_confirmed: bool
}

impl Model for User {
    type Type = User;

    fn to_document(&self) -> bson::Document {
        doc! {
            "id": &self.id,
            "name": &self.name,
            "email": &self.email,
            "password": &self.password,
            "email_confirmed": &self.email_confirmed,
        }
    }

    fn new(doc: bson::Document) -> Self::Type {
        User {
            id: doc.get("id").unwrap().to_string(),
            name: doc.get("name").unwrap().to_string(),
            email: doc.get("email").unwrap().to_string(),
            password: doc.get("password").unwrap().to_string(),
            email_confirmed: doc.get_bool("email_confirmed").unwrap(),
        }
    }
}