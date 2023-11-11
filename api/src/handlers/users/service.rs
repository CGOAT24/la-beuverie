use bson::{doc, Document};
use crate::database::database_client::DatabaseClient;
use crate::handlers::users::types::CreateUserRequest;
use crate::models::model::Model;
use crate::models::user::User;

async fn get_client() -> DatabaseClient {
    DatabaseClient::new("users".to_string()).await.expect("error while creating mongo client")
}

pub async fn get_from_id(id: String) -> User {
    let client = get_client().await;
    let data: Document = client.get(doc! { "id" : id}).await.unwrap().unwrap();
    User::new(data)
}

pub async fn get_from_email(email: String) -> User {
    let client = get_client().await;
    let data: Document = client.get(doc! {"email": email}).await.unwrap().unwrap();
    User::new(data)
}

pub async fn create(request: CreateUserRequest) -> User {
    let client = get_client().await;
    let user = User {
        id: uuid::Uuid::new_v4().to_string(),
        name: request.name,
        email: request.email,
        password: request.password,
        email_confirmed: false,
    };
    client.add(user.to_document()).await;
    user
}