use actix_web::{Scope, web};
use crate::handlers::{auth, drinks, tags, users};

pub fn routes() -> Scope {
    web::scope("/api")
        .service(auth::routes::routes())
        .service(users::routes::routes())
        .service(tags::routes::routes())
        .service(drinks::routes::routes())
}