use mongodb::bson::doc;
use mongodb::{bson, Client, Cursor};

pub struct MongoClient {
    client: Client,
    collection: String,
    database: String
}

impl MongoClient {
    pub async fn get_all(&self) -> mongodb::error::Result<Cursor<bson::Document>> {
        let db = &self.client.database(&self.database).collection(&self.collection);
        db.find(doc! {}, None).await
    }

    pub async fn delete(&self, id: bson::Document) {
        //TODO: something fucks up here
        let db = &self.client.database(&self.database).collection::<bson::Document>(&self.collection);
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

    pub async fn new(collection: String) -> MongoClient {
        let uri: String = std::env::var("MONGODB_URI").expect("Can't get uri from env"));
        MongoClient {
            client: Client::with_uri_str(uri).await.expect("failed to connect"),
            collection,
            database: std::env::var("DATABASE").expect("Can't get database name from env")
        }
    }
}

