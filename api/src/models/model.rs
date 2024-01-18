use mongodb::bson::oid::ObjectId;

pub trait Model {
    type Type;
    fn get_id(&self) -> ObjectId;
    fn set_id(&mut self, id: ObjectId);
}