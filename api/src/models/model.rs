pub trait Model {
    type Type;
    fn get_id(&self) -> uuid::Uuid;
}