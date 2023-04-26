use actix_web::{App, HttpServer};
mod controllers;
pub mod services;
pub mod mongo_client;

use controllers::test;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .configure(test::test_config)
    })
        .bind(("0.0.0.0", 8000))?
        .run()
        .await
}