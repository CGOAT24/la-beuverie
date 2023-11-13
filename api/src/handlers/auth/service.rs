use bson::doc;
use crate::database::database_client::DatabaseClient;
use crate::handlers::auth::types::AuthResponse;
use crate::models::model::Model;
use reqwest::header;
use crate::models::user::User;

async fn get_client() -> DatabaseClient {
    DatabaseClient::new("auth".to_string()).await.expect("error while creating mongo client")
}

pub async fn get_from_email(email: String) -> Option<User> {
    let client = get_client().await;
    let query = doc! { "email": email };
    if let Some(user) = client.get(query).await.unwrap() {
        return Some(User::new(user));
    }
    None
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

