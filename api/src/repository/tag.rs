use futures_util::StreamExt;
use mongodb::bson::doc;
use mongodb::{Collection, Database};
use crate::models::drink::Drink;

#[derive(Clone)]
pub struct TagRepo {
    repo: Collection<Drink>
}

impl TagRepo {
    pub async fn init(database: Database) -> Self {
        TagRepo {
            repo: database.collection("drinks")
        }
    }

    pub async fn get_all(&self) -> Vec<String> {
        let mut cursor = self.repo.aggregate(
            [
                doc! {
                    "$unwind": "$tags"
                },
                doc! {
                    "$group": doc! {
                        "_id": "$tags",
                        "count": doc! {
                            "$sum": 1
                        }
                    }
                },
                doc! {
                    "$project": doc! {
                        "_id": 1,
                        "count": 1,
                        "unique": doc! {
                            "$eq": [
                                "$count",
                                1
                            ]
                        }
                    }
                },
                doc! {
                    "$match": doc! {
                        "unique": true
                    }
                }
            ], None).await.unwrap();

        let mut result: Vec<String> = vec![];
        while let Some(doc) = cursor.next().await {
            result.push(doc.unwrap().get_str("_id").unwrap().to_string());
        }
        result
    }
}