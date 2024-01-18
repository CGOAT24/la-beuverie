use actix_web::{Scope, web};
use crate::handlers::{auth, drinks, users};

pub fn routes() -> Scope {
    web::scope("/api")
        .service(auth::routes::routes())
        .service(users::routes::routes())
        .service(drinks::routes::routes())
}