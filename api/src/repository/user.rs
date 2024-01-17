use mongodb::bson::doc;
use mongodb::Database;
use crate::models::user::User;
use crate::repository::repo::{BaseRepo, Repo};

#[derive(Clone)]
pub struct UserRepo {
    repo: BaseRepo<User>
}

impl UserRepo {
    pub async fn init(database: Database) -> UserRepo {
        UserRepo {
            repo: BaseRepo::init(database.collection("users")).await
        }
    }

    pub async fn get_from_email(&self, t: User) -> Option<User> {
        self.repo.collection.find_one(doc! {"email": t.email}, None).await.unwrap()
    }
}

impl Repo<User> for UserRepo {
    async fn get_all(&self) -> Vec<User> {
        self.repo.get_all().await.unwrap()
    }

    async fn get(&self, id: uuid::Uuid) -> Option<User> {
        Some(self.repo.get(id).await.unwrap())
    }

    async fn create(&self, t: User) -> bool {
        self.repo.create(t).await.unwrap()
    }

    async fn update(&self, t: User) -> bool {
        self.repo.update(t).await.unwrap()
    }

    async fn delete(&self, id: uuid::Uuid) -> bool {
        self.repo.delete(id).await.unwrap()
    }
}