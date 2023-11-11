use actix_web::{get, HttpResponse, Responder};
use crate::handlers::tags::service;

#[get("")]
async fn get_all() -> impl Responder {
    let data = service::get_all().await;
    HttpResponse::Ok().json(data)
}