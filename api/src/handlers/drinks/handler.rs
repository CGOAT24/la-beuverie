use actix_web::{delete, get, HttpResponse, post, put, Responder, web};
use mongodb::bson::oid::ObjectId;
use crate::AppState;
use crate::handlers::drinks::types::{CreateDrink, DrinkDto, UpdateDrink};
use crate::handlers::response::{Response, Status};
use crate::models::drink::Drink;
use crate::repository::repo::Repo;
use crate::utils::jwt_auth;

#[get("")]
async fn get_all(_: jwt_auth::JwtMiddleware, data: web::Data<AppState>) -> impl Responder {
    let drinks: Vec<DrinkDto> = data.db.drinks.get_all().await.iter().map(move |x| {
        DrinkDto::new(x.clone())
    }).collect();

    HttpResponse::Ok().json(Response::with_data(Status::SUCCESS, drinks))
}

#[get("/{id}")]
async fn get(path: web::Path<String>, _: jwt_auth::JwtMiddleware, data: web::Data<AppState>) -> impl Responder {
    let model = data.db.drinks.get(ObjectId::parse_str(path.into_inner()).unwrap()).await.unwrap();
    let drink = DrinkDto::new(model);
    HttpResponse::Ok().json(Response::with_data(Status::SUCCESS, drink))
}

#[post("")]
async fn create(body: web::Json<CreateDrink>, data: web::Data<AppState>, _: jwt_auth::JwtMiddleware) -> impl Responder {
    let input = Drink {
        id: None,
        name: body.name.clone(),
        directions: body.directions.clone(),
        ingredients: body.ingredients.clone(),
        tags: body.tags.clone()
    };
    let drink = data.db.drinks.create(input.clone()).await;
    HttpResponse::Ok().json(Response::with_data(Status::SUCCESS, drink))
}

#[put("/{id}")]
async fn update(path: web::Path<String>, body: web::Json<UpdateDrink>, data: web::Data<AppState>, _: jwt_auth::JwtMiddleware) -> impl Responder {
    let input = Drink {
        id: Some(ObjectId::parse_str(path.into_inner()).unwrap()),
        name: body.name.clone(),
        directions: body.directions.clone(),
        ingredients: body.ingredients.clone(),
        tags: body.tags.clone()
    };
    data.db.drinks.update(input.clone()).await;
    HttpResponse::Ok().json(Response::with_data(Status::SUCCESS, input))
}

#[delete("/{id}")]
async fn delete(path: web::Path<String>, data: web::Data<AppState>, _: jwt_auth::JwtMiddleware) -> impl Responder {
    data.db.drinks.delete(ObjectId::parse_str(path.into_inner()).unwrap()).await;
    HttpResponse::Ok().json(Response::new(Status::SUCCESS))
}