use actix_web::{get, HttpResponse, Responder, web};
use crate::services;
use serde_json;

pub fn drink_config(cfg: &mut web::ServiceConfig) {
    cfg.service(get_all);
}

#[get("/api/drinks")]
async fn get_all() -> impl Responder {
    let data = services::drink_service::get_all().await.unwrap();
    HttpResponse::Ok().json(data)
}