use actix_web::{App, HttpServer};
mod controllers;
pub mod services;
pub mod mongo_client;
pub mod models;
pub mod requests;

use controllers::drink;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .configure(drink::config)
    })
        .bind(("0.0.0.0", 8000))?
        .run()
        .await
}