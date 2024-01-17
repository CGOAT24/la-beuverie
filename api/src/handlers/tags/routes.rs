use actix_web::{Scope, web};
use crate::handlers::tags::handler;

pub fn routes() -> Scope {
    web::scope("/tags")
        .service(handler::get_all)
}