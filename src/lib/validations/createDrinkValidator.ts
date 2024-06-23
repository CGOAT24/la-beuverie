export interface CreateDrinkRequest {
	name: string;
	directions: string;
	tags: string[];
	ingredients: string[];
	userId: string;
}

export const validate = (request: CreateDrinkRequest): App.ValidationResponse => {
	const errors: Record<string, unknown> = {};
	if (!request.name) {
		errors.name = 'Name is required';
	}

	if (!request.directions) {
		errors.directions = 'Directions are required';
	}

	if (request.ingredients.length === 0) {
		errors.ingredients = 'At least one ingredient is required';
	}

	if (request.userId.length === 0) {
		errors.author = 'Author is required';
	}

	return {
		errors: errors,
		valid: Object.keys(errors).length === 0
	};
};
