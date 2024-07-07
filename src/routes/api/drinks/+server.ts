import type { RequestHandler } from '@sveltejs/kit';
import { drinkService } from '$lib/server/services/drinkService';
import { validate } from '$lib/validations/createDrinkValidator';

export const GET: RequestHandler = async ({ params }) => {
	if (params.id) {
		return Response.json(await drinkService.get(params.id));
	}
	return Response.json(await drinkService.getAll());
};

export const POST = async ({ request, locals }) => {
	const data: Request.CreateDrink = await request.json();
	data.userId = locals.user?.id ?? '';

	const { success, error } = await validate(data);
	if (!success) {
		return Response.json({ errors: error?.errors });
	}

	const drink = await drinkService.create(data);

	return Response.json(drink);
};

export const PUT = async ({ request, locals }) => {
	const data: Request.ReplaceDrink = await request.json();
	if (data.userId !== locals.user?.id) {
		return Response.json({ errors: ['invalid user'] });
	}

	const { success, error } = await validate(data);
	if (!success) {
		return Response.json({ errors: error?.errors });
	}

	const drink = await drinkService.replace(data);
	return Response.json(drink);
};

export const DELETE = async ({ params }) => {
	if (!params.id) {
		return Response.json({ errors: ['invalid id'] });
	}
	const drinkId = params.id;
	await drinkService.delete(drinkId);
	return Response.json({ message: 'Drink deleted successfully.' });
};
