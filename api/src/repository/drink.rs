use mongodb::Database;
use crate::models::drink::Drink;
use crate::repository::repo::{BaseRepo, Repo};

#[derive(Clone)]
pub struct DrinkRepo {
    repo: BaseRepo<Drink>
}

impl DrinkRepo {
    pub async fn init(database: Database) -> DrinkRepo {
        DrinkRepo {
            repo: BaseRepo::init(database.collection("drinks")).await
        }
    }
}

impl Repo<Drink> for DrinkRepo {
    async fn get_all(&self) -> Vec<Drink> {
        self.repo.get_all().await.unwrap()
    }

    async fn get(&self, id: uuid::Uuid) -> Option<Drink> {
        Some(self.repo.get(id).await.unwrap())
    }

    async fn create(&self, t: Drink) -> Drink {
        self.repo.create(t).await.unwrap()
    }

    async fn update(&self, t: Drink) -> bool {
        self.repo.update(t).await.unwrap()
    }

    async fn delete(&self, id: uuid::Uuid) -> bool {
        self.repo.delete(id).await.unwrap()
    }
}