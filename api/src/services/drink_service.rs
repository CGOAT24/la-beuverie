use crate::mongo_client::mongo_client::MongoClient;
use crate::models::drink::Drink;
use futures::stream::{TryStreamExt};

async fn get_client() -> MongoClient {
    MongoClient::new("drinks".to_string()).await.expect("error while creating mongo client")
}

pub async fn get_all() -> Result<Vec<Drink>, mongodb::error::Error> {
    let client = get_client().await;
    let mut cursor = client.get_all().await.unwrap();
    let mut result = vec![];
    while let Some(doc) = cursor.try_next().await? {
        result.push(Drink::new(doc))
    }
    Ok(result)
}