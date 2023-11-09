use actix_web::{App, HttpServer};

mod handlers;
pub mod services;
pub mod mongo_client;
pub mod models;
pub mod requests;

use handlers::drink;
use handlers::tag;
use handlers::user;
use handlers::auth;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .configure(drink::config)
            .configure(tag::config)
            .configure(auth::config)
            .configure(user::config)
    })
        .bind(("0.0.0.0", 8000))?
        .run()
        .await
}