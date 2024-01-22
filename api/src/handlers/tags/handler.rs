use actix_web::{get, HttpResponse, Responder, web};
use crate::AppState;
use crate::handlers::response::{Response, Status};
use crate::utils::jwt_auth;

#[get("")]
async fn get_all(_: jwt_auth::JwtMiddleware, data: web::Data<AppState>) -> impl Responder {
    let tags = data.db.tags.get_all().await;
    HttpResponse::Ok().json(Response::with_data(Status::SUCCESS, tags))
}