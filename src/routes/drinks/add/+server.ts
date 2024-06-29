import { drinkService } from '$lib/server/services/drinkService.js';
import { validate } from '$lib/validations/createDrinkValidator';

export const POST = async (event) => {
	const data: Request.CreateDrink = await event.request.json();
	data.userId = event.locals.user?.id ?? '';

	const { success, error } = await validate(data);
	if (!success) {
		return Response.json({ errors: error?.errors });
	}

	const drink = await drinkService.create(data);

	return Response.json(drink);
};
