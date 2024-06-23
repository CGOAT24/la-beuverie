import { drinkService } from '$lib/server/services/drinkService.js';
import { validate, type CreateDrinkRequest } from '$lib/validations/createDrinkValidator';

export const POST = async (event) => {
	const data: CreateDrinkRequest = await event.request.json();
	data.userId = event.locals.user?.id ?? '';

	const { errors, valid } = await validate(data);
	if (!valid) {
		return Response.json({ errors: errors });
	}

	const drink = await drinkService.create(data);

	return Response.json(drink);
};
