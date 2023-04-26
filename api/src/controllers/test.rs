use actix_web::{get, web, HttpResponse, Responder};
use crate::services;


pub fn test_config(cfg: &mut web::ServiceConfig) {
    cfg.service(root);
    cfg.service(mongo_new);
    cfg.service(mongo_get);
}

#[get("/")]
async fn root() -> impl Responder {
    HttpResponse::Ok().body("Hello, world from far away!")
}

#[get("/mongo/add")]
async fn mongo_new() -> impl Responder {
    services::test::add().await;
    HttpResponse::Ok()
}

#[get("/mongo/get")]
async fn mongo_get() -> impl Responder {
    let result = services::test::get().await;
    HttpResponse::Ok().json(result)
}