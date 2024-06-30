import { drinkService } from '$lib/server/services/drinkService';
import { validate } from '$lib/validations/replaceDrinkValidator';

export const POST = async (event) => {
	const data: Request.ReplaceDrink = await event.request.json();
	if (data.userId !== event.locals.user?.id) {
		return Response.json({ errors: ['invalid user'] });
	}

	const { success, error } = await validate(data);
	if (!success) {
		return Response.json({ errors: error?.errors });
	}

	const drink = await drinkService.replace(data);
	return Response.json(drink);
};
