use actix_web::{Scope, web};

pub fn routes() -> Scope {
    web::scope("/tags")
        .service(crate::handlers::tags::handler::get_all)
}