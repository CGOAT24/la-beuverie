use actix_web::{get, HttpResponse, Responder};
use crate::services;

#[get("")]
async fn get_all() -> impl Responder {
    let data = services::tag::get_all().await;
    HttpResponse::Ok().json(data)
}