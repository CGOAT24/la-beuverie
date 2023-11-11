use actix_web::{get, post, HttpResponse, Responder, web, delete, put};
use crate::extractors::claims::Claims;
use crate::handlers::drinks::service;
use crate::handlers::drinks::types::{CreateDrinkRequest, UpdateDrinkRequest};

#[get("")]
async fn get_all() -> impl Responder {
    let data = service::get_all().await;
    HttpResponse::Ok().json(data)
}

#[get("{id}")]
async fn get(id: web::Path<String>) -> impl Responder {
    let data = service::get(id.to_string()).await;
    HttpResponse::Ok().json(data)
}

#[post("")]
async fn create(request: web::Json<CreateDrinkRequest>, _claims: Claims) -> impl Responder {
    let data = service::add(request.0).await;
    HttpResponse::Ok().json(data)
}

#[delete("{id}")]
async fn delete(id: web::Path<String>, _claims: Claims) -> impl Responder {
    service::delete(id.to_string()).await;
    HttpResponse::Ok()
}

#[put("")]
async fn update(request: web::Json<UpdateDrinkRequest>, _claims: Claims) -> impl Responder {
    HttpResponse::Ok()
}
