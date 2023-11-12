use bson::from_bson;
use crate::database::database_client::DatabaseClient;

async fn get_client() -> DatabaseClient {
    DatabaseClient::new("drinks".to_string()).await.unwrap()
}

pub async fn get_all() -> Vec<String> {
    let client = get_client().await;
    let tags = client.unique("tags".to_string()).await.unwrap();
    let mut vec = vec![];
    for tag in tags {
        match from_bson(tag) {
            Ok(deserialized) => {
                vec.push(deserialized);
            }
            _ => {}
        }
    }
    vec
}