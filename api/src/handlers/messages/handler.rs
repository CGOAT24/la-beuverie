use actix_web::{get, Responder, web};
use crate::extractors::claims::Claims;
use crate::handlers::messages::types::{Message, Metadata};

#[get("/protected")]
pub async fn protected(_claims: Claims) -> impl Responder {
    web::Json(Message {
        metadata: Metadata {
            api: "api_actix-web_rust_hello-world".to_string(),
            branch: "basic-authorization".to_string(),
        },
        text: "This is a protected message.".to_string(),
    })
}