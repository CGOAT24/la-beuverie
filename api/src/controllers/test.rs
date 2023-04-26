use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Error};

#[get("/")]
pub async fn test() -> impl Responder {
    HttpResponse::Ok().body("Hello, world from far away!")
}