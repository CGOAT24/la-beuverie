use crate::mongo_client::mongo_client::MongoClient;
use crate::models::drink::{cursor_to_vec, Drink};

async fn get_client() -> MongoClient {
    MongoClient::new("drinks".to_string()).await.expect("error while creating mongo client")
}

pub async fn get_all() -> Vec<Drink> {
    let client = get_client().await;
    let cursor = client.get_all().await.unwrap();
    cursor_to_vec(cursor).await.unwrap()
}