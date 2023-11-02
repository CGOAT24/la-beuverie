use bson::Document;
use mongodb::bson::doc;
use mongodb::{bson, Client, Cursor};
use mongodb::options::ClientOptions;

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

    pub async fn delete(&self, id: bson::Document) {
        //TODO: something fucks up here
        let db = &self.client.database(&self.database).collection::<Document>(&self.collection);
        db.find_one_and_delete(id, None).await.expect("Error occurred while deleting document");
    }

    pub async fn update(&self, document: bson::Document) {
        //TODO: something fucks up here
        let db = &self.client.database(&self.database).collection(&self.collection);
        db.replace_one(document.clone(), document.clone(), None).await.expect("Error occurred while updating document");
    }

    pub async fn get(&self, id: bson::Document) -> mongodb::error::Result<Option<bson::Document>> {
        let db = &self.client.database(&self.database).collection(&self.collection);
        db.find_one(id, None).await
    }

    pub async fn add(&self, document: bson::Document) {
        let db = &self.client.database(&self.database).collection(&self.collection);
        db.insert_one(document.clone(), None).await.expect("Error occurred while inserting document");
    }

    pub async fn new(collection: String) -> Result<MongoClient, mongodb::error::Error> {
        let client_options = ClientOptions::parse("mongodb://root:password@host.docker.internal:27017/test?authSource=admin").await?;
        let client = Client::with_options(client_options)?;

        Ok(MongoClient {
            client,
            collection,
            database: "test".to_string(),
        })
    }
}


