import { r as redirect, f as fail } from '../../../../chunks/index.js';
import { p as parse } from '../../../../chunks/formDataParser.js';
import { p as prisma } from '../../../../chunks/prisma.js';
const validate = (request) => {
	const errors = {};
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
		errors,
		valid: Object.keys(errors).length === 0
	};
};
const drinkService = {
	create: async (drink) => {
		return prisma.drink.create({
			data: drink
		});
	}
};
const load = async (event) => {
	if (!event.locals.user) {
		redirect(302, '/auth/login');
	}
	return {
		username: event.locals.user.username
	};
};
const actions = {
	default: async ({ request }) => {
		const drink = parse(await request.formData());
		const { valid, errors } = validate(drink);
		if (!valid) {
			return fail(400, errors);
		}
		await drinkService.create(drink);
		throw redirect(303, '/');
	}
};
export { actions, load };
