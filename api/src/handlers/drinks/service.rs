use bson::{doc, Document};
use crate::database::database_client::{cursor_to_vec, DatabaseClient};
use crate::models::drink::Drink;
use uuid::Uuid;
use crate::handlers::drinks::types::{CreateDrinkRequest, UpdateDrinkRequest, ValidateDrinkRequest};
use crate::models::model::Model;

async fn get_client() -> DatabaseClient {
    DatabaseClient::new("drinks".to_string()).await.unwrap()
}

pub async fn get_all() -> Option<Vec<Drink>> {
    let client = get_client().await;
    let cursor = client.get_all().await.unwrap();
    Some(cursor_to_vec::<Drink>(cursor).await.unwrap())
}

pub async fn get(id: String) -> Option<Drink> {
    let client = get_client().await;
    let data: Document = client.get(doc! {"id": id}).await.unwrap().unwrap();
    Some(Drink::new(data))
}

pub async fn add(request: CreateDrinkRequest) -> Option<Drink> {
    let drink = Drink {
        id: Uuid::new_v4().to_string(),
        name: request.name.clone(),
        directions: request.directions.clone(),
        tags: request.tags.clone(),
        ingredients: request.ingredients.clone(),
    };
    let validate_request = ValidateDrinkRequest {
        name: request.name,
        ingredients: request.ingredients,
        tags: request.tags,
        directions: request.directions
    };
    if !validate(validate_request).await {
        return None;
    }
    let client = get_client().await;
    client.add(drink.to_document()).await;
    Some(drink)
}

pub async fn delete(id: String) {
    let client = get_client().await;
    client.delete(doc! { "id": id }).await;
}

pub async fn update(request: UpdateDrinkRequest) -> Option<Drink> {
    let drink = Drink {
        id: request.id,
        name: request.name.clone(),
        directions: request.directions.clone(),
        tags: request.tags.clone(),
        ingredients: request.ingredients.clone()
    };
    let validate_request = ValidateDrinkRequest {
        name: request.name,
        ingredients: request.ingredients,
        tags: request.tags,
        directions: request.directions
    };
    if !validate(validate_request).await {
        return None;
    }
    let client = get_client().await;
    client.update(drink.to_document()).await;
    Some(drink)
}

async fn validate(request: ValidateDrinkRequest) -> bool {
    if request.name.is_empty() {
        return false;
    }
    if request.directions.is_empty() {
        return false;
    }
    if request.ingredients.is_empty() {
        return false;
    }
    if request.tags.is_empty() {
        return false;
    }
    let query = doc! { "name": request.name };
    let client = get_client().await;
    client.get(query).await.unwrap().is_none()
}