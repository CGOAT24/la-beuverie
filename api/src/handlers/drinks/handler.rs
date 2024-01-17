use actix_web::{delete, get, HttpResponse, post, put, Responder, web};
use serde_json::json;
use crate::AppState;
use crate::handlers::drinks::types::{CreateDrink, DrinkDto, UpdateDrink};
use crate::repository::repo::Repo;
use crate::utils::jwt_auth;

#[get("/")]
async fn get_all(_: jwt_auth::JwtMiddleware, data: web::Data<AppState>) -> impl Responder {
    let drinks: Vec<DrinkDto> = data.db.drinks.get_all().await.iter().map(move |x| {
        DrinkDto::new(x.clone())
    }).collect();

    let response = json!({ "data": drinks});
    HttpResponse::Ok().json(response)
}

#[get("/{id}")]
async fn get(path: web::Path<uuid::Uuid>, _: jwt_auth::JwtMiddleware, data: web::Data<AppState>) -> impl Responder {
    let model = data.db.drinks.get(path.into_inner()).await.unwrap();
    let drink = DrinkDto::new(model);
    let response = json!({ "data": drink });
    HttpResponse::Ok().json(response)
}

#[post("/")]
async fn create(body: web::Json<CreateDrink>, data: web::Data<AppState>, _: jwt_auth::JwtMiddleware) -> impl Responder {

}

#[put("/{id}")]
async fn update(path: web::Path<uuid::Uuid>, body: web::Json<UpdateDrink>, data: web::Data<AppState>, _: jwt_auth::JwtMiddleware) -> impl Responder {

}

#[delete("/{id}")]
async fn delete(path: web::Path<uuid::Uuid>, data: web::Data<AppState>, _: jwt_auth::JwtMiddleware) -> impl Responder {
    data.db.drinks.delete(path.into_inner()).await;
    HttpResponse::Ok()
}