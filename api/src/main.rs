use actix_cors::Cors;
use actix_web::{App, HttpServer, web};
use actix_web::http::header;
use actix_web::middleware::Logger;
use dotenv::dotenv;
use mongodb::Client;
use repository::db_client::DbClient;
use crate::repository::drink::DrinkRepo;
use crate::repository::user::UserRepo;
use crate::utils::config::Config;

mod models;
mod utils;
mod extractors;
mod repository;
mod handlers;

#[derive(Clone)]
pub struct AppState {
    pub env: Config,
    pub db: DbClient
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "actix_web=info");
    }

    dotenv().ok();
    env_logger::init();

    let config = Config::init();
    let database = Client::with_uri_str(config.clone().database_url).await.unwrap().database("la-beuverie");

    let app_state: AppState = AppState {
        env: config.clone(),
        db: DbClient {
            users: UserRepo::init(database.clone()).await,
            drinks: DrinkRepo::init(database.clone()).await,
        },
    };

    println!("Server started!");

    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
            .allowed_headers(vec![
                header::CONTENT_TYPE,
                header::AUTHORIZATION,
                header::ACCEPT,
            ])
            .supports_credentials();
        App::new()
            .app_data(web::Data::new(app_state.clone()))
            .wrap(cors)
            .wrap(Logger::default())
            .service(handlers::routes::routes())
    })
        .bind(("0.0.0.0", config.port))?
        .run()
        .await
}