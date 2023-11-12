use actix_web::{get, post, HttpResponse, Responder, web, delete, put};
use serde_json::json;
use crate::extractors::claims::Claims;
use crate::handlers::drinks::service;
use crate::handlers::drinks::types::{CreateDrinkRequest, DrinkDto, DrinkNameDto, UpdateDrinkRequest};
use crate::handlers::types::Dto;

#[get("")]
async fn get_all() -> impl Responder {
    let data = service::get_all().await.unwrap();
    let drinks: Vec<DrinkNameDto> = data
        .into_iter()
        .map(|drink| DrinkNameDto::from_model(drink))
        .collect();
    HttpResponse::Ok().json(drinks)
}

#[get("{id}")]
async fn get(id: web::Path<String>) -> impl Responder {
    let data = service::get(id.to_string()).await.unwrap();
    let drink = DrinkDto::from_model(data);
    HttpResponse::Ok().json(drink)
}

#[post("")]
async fn create(request: web::Json<CreateDrinkRequest>, _claims: Claims) -> impl Responder {
    if let Some(data) = service::add(request.0).await {
        let drink = DrinkDto::from_model(data);
        return HttpResponse::Ok().json(drink)
    }
    HttpResponse::BadRequest().json(json!({"error": "invalid data"}))
}

#[delete("{id}")]
async fn delete(id: web::Path<String>, _claims: Claims) -> impl Responder {
    service::delete(id.to_string()).await;
    HttpResponse::Ok()
}

#[put("")]
async fn update(request: web::Json<UpdateDrinkRequest>, _claims: Claims) -> impl Responder {
    if let Some(data) = service::update(request.0).await {
        let drink = DrinkDto::from_model(data);
        return HttpResponse::Ok().json(drink)
    }
    HttpResponse::BadRequest().json(json!({"error": "invalid data"}))
}
