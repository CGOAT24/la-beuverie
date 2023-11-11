use actix_web::{Scope, web};
use crate::handlers::messages::handler;

pub fn routes() -> Scope {
    web::scope("/messages")
        .service(handler::protected)
}