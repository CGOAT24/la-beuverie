use mongodb::bson;
use crate::mongo_client::mongo_client::MongoClient;
use bson::Document;
use mongodb::bson::doc;

async fn get_client() -> MongoClient {
    MongoClient::new("collection1".to_string()).await.expect("Error while creating mongo client")
}

pub async fn get() -> Option<Document> {
    let client = get_client().await;
    let result = client.get(doc! { "name": "Chad" }).await;
    result.unwrap()
}

pub async fn add() {
    let client = get_client().await;
    client.add(doc! { "name": "Chad", "age": 22 }).await;
}
