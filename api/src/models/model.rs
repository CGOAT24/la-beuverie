use bson::Document;

pub trait Model {
    type Type;
    fn to_document(&self) -> Document;
    fn new(doc: Document) -> Self::Type;
}