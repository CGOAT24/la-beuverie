use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Error};
use mongodb::{Client, options::ClientOptions};
mod controllers;
use controllers::test;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let uri = std::env::var("MONGODB_URI").unwrap_or_else(|_| "mongodb://localhost:27017".into());

    let client = Client::with_uri_str(uri).await.expect("failed to connect");

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(client.clone())).service(test::test)
            
    })
        .bind(("0.0.0.0", 8000))?
        .run()
        .await
}