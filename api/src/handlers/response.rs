use serde::Serialize;
use serde_json::json;

#[derive(Serialize)]
pub enum Status {
    SUCCESS,
    ERROR
}

pub struct Response;

impl Response {
    pub fn with_data<T: Serialize>(status: Status, data: T) -> serde_json::Value {
        json!({
            "status": status,
            "data": data
        })
    }

    pub fn with_message(status: Status, message: &str) -> serde_json::Value {
        json!({
            "status": status,
            "message": message
        })
    }

    pub fn new(status: Status) -> serde_json::Value {
        json!({
            "status": status
        })
    }
}