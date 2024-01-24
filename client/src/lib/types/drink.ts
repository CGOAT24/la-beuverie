export interface Drink {
	id: string,
	name: string,
	directions: string,
	tags: string[],
	ingredients: string[]
}

export interface CreateDrinkRequest {
	name: string,
	directions: string,
	tags: string[],
	ingredients: string[]
}

export interface UpdateDrinkRequest {
	id: string,
	name: string,
	directions: string,
	tags: string[],
	ingredients: string[]
}