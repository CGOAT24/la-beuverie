use bson::{doc, Document};
use crate::mongo_client::mongo_client::{cursor_to_vec, MongoClient};
use crate::models::drink::Drink;
use uuid::Uuid;
use crate::models::model::Model;
use crate::requests::create_drink_request::CreateDrinkRequest;

async fn get_client() -> MongoClient {
    MongoClient::new("drinks".to_string()).await.expect("error while creating mongo client")
}

pub async fn get_all() -> Vec<Drink> {
    let client = get_client().await;
    let cursor = client.get_all().await.unwrap();
    cursor_to_vec::<Drink>(cursor).await.unwrap()
}

pub async fn get(id: String) -> Drink {
    let client = get_client().await;
    let data: Document = client.get(doc! {"id": id}).await.unwrap().unwrap();
    Drink::new(data)
}

pub async fn add(request: CreateDrinkRequest) -> Drink {
    let drink = Drink {
        id: Uuid::new_v4().to_string(),
        name: request.name,
        directions: request.directions,
        tags: request.tags,
        ingredients: request.ingredients,
    };
    let client = get_client().await;
    client.add(drink.to_document()).await;
    drink
}