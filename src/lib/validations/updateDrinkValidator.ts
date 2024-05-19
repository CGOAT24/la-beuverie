import type { Drink } from '@prisma/client';

export const validate = (request: Drink): App.ValidationResponse => {
	const errors: Record<string, unknown> = {};

	if (!request.id) {
		errors.id = 'Id is missing';
	}

	if (!request.name) {
		errors.name = 'Name is required';
	}

	if (!request.directions) {
		errors.directions = 'Directions are required';
	}

	if (request.ingredients.length === 0) {
		errors.ingredients = 'At least one ingredient is required';
	}

	return {
		errors: errors,
		valid: Object.keys(errors).length === 0
	};
};
