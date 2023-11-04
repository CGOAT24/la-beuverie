use crate::mongo_client::mongo_client::MongoClient;

async fn get_client() -> MongoClient {
    MongoClient::new("tags".to_string()).await.expect("error while creating mongo client")
}

pub async fn get_all() -> Vec<String> {
    let client = get_client().await;
    client.get_all().await.unwrap();
}