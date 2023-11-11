use actix_web::{App, HttpServer};
use dotenv::dotenv;

mod types;
mod middlewares;
mod extractors;
mod handlers;

pub mod database;
pub mod models;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::init();
    let config = types::Config::default();
    let auth0_config = extractors::claims::Auth0Config::default();
    HttpServer::new(move || {
        App::new()
            .app_data(auth0_config.clone())
            .wrap(middlewares::cors::cors(&config.client_origin_url))
            //.wrap(middlewares::err_handlers::err_handlers())
            .wrap(middlewares::security_headers::security_headers())
            .wrap(middlewares::logger::logger())
            .service(handlers::routes::routes())
    })
        .bind((config.host, config.port))?
        .run()
        .await
}