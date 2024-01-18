use futures_util::StreamExt;
use mongodb::bson::{doc};
use mongodb::{Collection, Cursor};
use mongodb::error::Error;
use serde::de::DeserializeOwned;
use serde::Serialize;
use crate::models::model::Model;

pub trait Repo<T: Model> {
    async fn get_all(&self) -> Vec<T>;
    async fn get(&self, id: uuid::Uuid) -> Option<T>;
    async fn create(&self, t: T) -> T;
    async fn update(&self, t: T) -> bool;
    async fn delete(&self, id: uuid::Uuid) -> bool;
}

#[derive(Clone)]
pub struct BaseRepo<T: Model> {
    pub collection: Collection<T>
}

impl<T> BaseRepo<T> where T: Model + Serialize + DeserializeOwned + Unpin + Send + Sync + Clone {
    pub async fn init(collection: Collection<T>) -> BaseRepo<T> {
        BaseRepo {
            collection
        }
    }

    pub async fn get_all(&self) -> Result<Vec<T>, Error> {
        let list = self.collection.find(doc! {}, None).await.unwrap();
        Ok(cursor_to_vec(list).await.unwrap())
    }

    pub async fn get(&self, id: uuid::Uuid) -> Result<T, Error> {
        let doc = self.collection.find_one(doc! {"_id": id.to_string()}, None).await.unwrap().unwrap();
        Ok(doc)
    }

    pub async fn create(&self, mut model: T) -> Result<T, Error> {
        let result = self.collection.insert_one(model.clone(), None).await.unwrap();
        model.set_id(result.inserted_id.as_object_id().unwrap());
        Ok(model)
    }

    pub async fn update(&self, model: T) -> Result<bool, Error> {
        self.collection.replace_one(doc! {"_id": model.get_id().to_string()}, model, None).await.unwrap();
        Ok(true)
    }

    pub async fn delete(&self, id: uuid::Uuid) -> Result<bool, Error> {
        self.collection.find_one_and_delete(doc! {"_id": id.to_string()}, None).await.unwrap();
        Ok(true)
    }
}

async fn cursor_to_vec<T>(mut cursor: Cursor<T>) -> Result<Vec<T>, mongodb::error::Error> where T: Model + DeserializeOwned + Unpin + Send + Sync {
    let mut result: Vec<T> = vec![];
    while let Some(doc) = cursor.next().await {
        result.push(doc.unwrap());
    }
    return Ok(result);
}

