use bson::{doc, Document};
use crate::database::database_client::{cursor_to_vec, DatabaseClient};
use crate::models::drink::Drink;
use uuid::Uuid;
use crate::handlers::drinks::types::CreateDrinkRequest;
use crate::models::model::Model;

async fn get_client() -> DatabaseClient {
    DatabaseClient::new("drinks".to_string()).await.unwrap()
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

pub async fn delete(id: String) {
    let client = get_client().await;
    client.delete(doc! { "id": id }).await;
}
