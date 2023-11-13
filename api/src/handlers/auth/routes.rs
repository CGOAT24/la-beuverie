use actix_web::{Scope, web};
use crate::handlers::auth::handler;

pub fn routes() -> Scope {
    web::scope("/auth")
        .service(handler::login)
}