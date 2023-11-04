use actix_web::{get, HttpResponse, Responder, web};

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(get_all);
}

#[get("/api/tags")]
async fn get_all() -> impl Responder {
    let data = services::tag::get_all().await;
    HttpResponse::Ok().json(data)
}