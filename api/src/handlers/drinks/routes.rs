use actix_web::{Scope, web};
use crate::handlers::drinks::handler;

pub fn routes() -> Scope {
    web::scope("/drinks")
        .service(handler::get_all)
        .service(handler::get)
        .service(handler::create)
        .service(handler::update)
        .service(handler::delete)
}