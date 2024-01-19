use crate::repository::drink::DrinkRepo;
use crate::repository::tag::TagRepo;
use crate::repository::user::UserRepo;

#[derive(Clone)]
pub struct DbClient {
    pub users: UserRepo,
    pub drinks: DrinkRepo,
    pub tags: TagRepo
}