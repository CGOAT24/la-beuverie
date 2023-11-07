use crate::models::tag::Tag;
use crate::mongo_client::mongo_client::{cursor_to_vec, MongoClient};

async fn get_client() -> MongoClient {
    MongoClient::new("tags".to_string()).await.expect("error while creating mongo client")
}

pub async fn get_all() -> Vec<Tag> {
    let client = get_client().await;
    let vec = client.get_all().await.unwrap();
    cursor_to_vec::<Tag>(vec).await.unwrap()
}