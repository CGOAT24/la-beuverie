use bson::Document;
use futures::TryStreamExt;
use mongodb::bson::doc;
use mongodb::{bson, Client, Cursor};
use mongodb::options::ClientOptions;
use crate::models::model::Model;

pub struct MongoClient {
    client: Client,
    collection: String,
    database: String
}

impl MongoClient {
    pub async fn get_all(&self) -> mongodb::error::Result<Cursor<Document>> {
        let db = &self.client.database(&self.database).collection(&self.collection);
        db.find(doc! {}, None).await
    }

    pub async fn delete(&self, id: Document) {
        let db = &self.client.database(&self.database).collection::<Document>(&self.collection);
        db.find_one_and_delete(id, None).await.expect("Error occurred while deleting document");
    }

    pub async fn update(&self, document: Document) {
        let db = &self.client.database(&self.database).collection(&self.collection);
        db.replace_one(document.clone(), document.clone(), None).await.expect("Error occurred while updating document");
    }

    pub async fn get(&self, id: Document) -> mongodb::error::Result<Option<Document>> {
        let db = &self.client.database(&self.database).collection(&self.collection);
        db.find_one(id, None).await
    }

    pub async fn add(&self, document: Document) {
        let db = &self.client.database(&self.database).collection(&self.collection);
        db.insert_one(document.clone(), None).await.expect("Error occurred while inserting document");
    }

    pub async fn new(collection: String) -> Result<MongoClient, mongodb::error::Error> {
        let database: String = dotenv::var("MONGO_DATABASE").expect("MONGO_DATABASE must be set");
        let uri: String = dotenv::var("MONGO_URI").expect("MONGO_URI must be set");
        let client_options = ClientOptions::parse(uri).await?;
        let client = Client::with_options(client_options)?;

        Ok(MongoClient {
            client,
            collection,
            database,
        })
    }

    pub async fn exists(&self, _filter: Document) -> mongodb::error::Result<bool> {
        todo!()
    }
}

pub async fn cursor_to_vec<T: Model>(mut cursor: Cursor<Document>) -> Result<Vec<T::Type>, mongodb::error::Error> {
    let mut result: Vec<T::Type> = vec![];
    while let Some(doc) = cursor.try_next().await? {
        result.push(T::new(doc));
    }
    Ok(result)
}
