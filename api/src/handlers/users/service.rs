use argon2::{Argon2, PasswordHasher};
use argon2::password_hash::rand_core::OsRng;
use argon2::password_hash::SaltString;
use bson::doc;
use crate::database::database_client::DatabaseClient;
use crate::handlers::users::types::{AuthResponse, CreateUserRequest};
use crate::models::model::Model;
use crate::models::user::User;
use reqwest::header;

async fn get_client() -> DatabaseClient {
    DatabaseClient::new("users".to_string()).await.expect("error while creating mongo client")
}

pub async fn get_from_id(id: String) -> Option<User> {
    let client = get_client().await;
    if let Some(user) = client.get(doc! { "id": id }).await.unwrap() {
        return Some(User::new(user));
    }
    None
}

pub async fn get_from_email(email: String) -> Option<User> {
    let client = get_client().await;
    let query = doc! { "email": email };
    if let Some(user) = client.get(query).await.unwrap() {
        return Some(User::new(user));
    }
    None
}

pub async fn create(request: CreateUserRequest) -> Option<User> {
    let argon2 = Argon2::default();
    let password = argon2.hash_password(request.password.as_bytes(), &SaltString::generate(&mut OsRng)).unwrap().to_string();

    let client = get_client().await;
    let user = User {
        id: uuid::Uuid::new_v4().to_string(),
        name: request.name,
        email: request.email,
        password
    };
    client.add(user.to_document()).await;
    Some(user)
}

pub async fn get_token() -> Option<AuthResponse> {
    let url = "https://dev-w6rvmtejbgcv33gb.us.auth0.com/oauth/token";
    let client = reqwest::Client::new();
    let mut headers = header::HeaderMap::new();
    headers.insert(header::CONTENT_TYPE, header::HeaderValue::from_static("application/json"));
    let json_body = r#"
        {
            "client_id": "ANk0tLSOk5dB0RxhUpVPX4TR0mzdypvP",
            "client_secret": "SOFeHwqx2UJvE1NZy6NuFnLHfbo7sbdub3PuUgb19YipFHnVG5B30Xlb56kQ7WA5",
            "audience": "https://la-beuverie.com",
            "grant_type": "client_credentials"
        }
    "#;

    let response = client
        .post(url)
        .headers(headers)
        .body(json_body)
        .send().await;
    match response {
        Ok(res) => {
            if res.status().is_success() {
                let data: AuthResponse = serde_json::from_str(&*res.text().await.unwrap()).unwrap();
                Some(data)
            } else {
                None
            }
        }
        _err => {
            None
        }
    }
}

