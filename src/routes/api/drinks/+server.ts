import type { RequestHandler } from '@sveltejs/kit';
import { drinkService } from '$lib/server/services/drinkService';
import { validate } from '$lib/validations/createDrinkValidator';
import { createResponse } from '$lib/utils/HTTPRequest';
import { parseZodErrors } from '$lib/utils/errors';

export const GET: RequestHandler = async () => {
	return createResponse({ data: await drinkService.getAll() });
};

export const POST = async ({ request, locals }) => {
	const data: Request.CreateDrink = await request.json();
	data.userId = locals.user?.id ?? '';

	const { success, error } = await validate(data);
	if (!success) {
		return createResponse({ errors: parseZodErrors(error?.errors) });
	}

	const drink = await drinkService.create(data);
	return createResponse({ data: drink });
};
