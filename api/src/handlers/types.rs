pub trait Dto {
    type Model;
    fn from_model(model: Self::Model) -> Self;
}