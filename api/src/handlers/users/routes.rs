use actix_web::{Scope, web};
use crate::handlers::users::handler;

pub fn routes() -> Scope {
    web::scope("/users")
        .service(handler::me)
}