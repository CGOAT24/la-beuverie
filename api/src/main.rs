use actix_web::{App, HttpServer};
mod controllers;
pub mod services;
pub mod mongo_client;
pub mod models;

use controllers::drink_controller;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .configure(drink_controller::drink_config)
    })
        .bind(("0.0.0.0", 8000))?
        .run()
        .await
}