use actix_web::{Scope, web};
use crate::handlers::{drinks, tags, users};

pub fn routes() -> Scope {
    web::scope("/api")
        .service(drinks::routes::routes())
        .service(tags::routes::routes())
        .service(users::routes::routes())
}