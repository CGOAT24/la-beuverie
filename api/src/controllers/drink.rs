use actix_web::{get, post, HttpResponse, Responder, web};
use crate::services;
use crate::requests::create_drink_request::CreateDrinkRequest;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(get_all);
}

#[get("/api/drinks")]
async fn get_all() -> impl Responder {
    let data = services::drink::get_all().await;
    HttpResponse::Ok().json(data)
}

#[get("/api/drinks/{id}")]
async fn get(id: web::Path<String>) -> impl Responder {
    let data = services::drink::get(id.to_string()).await;
    HttpResponse::Ok().json(data)
}

#[post("/api/drinks")]
async fn create(request: web::Json<CreateDrinkRequest>) -> impl Responder {
    let data = services::drink::add(request.0).await;
    HttpResponse::Ok().json(data)
}