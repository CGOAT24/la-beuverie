import { createResponse } from '$lib/utils/HTTPRequest';
import { validate } from '$lib/validations/createDrinkValidator';
import { parseZodErrors } from '$lib/utils/errors';
import { drinkService } from '$lib/server/services/drinkService';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	if (!params.id) {
		return createResponse({ errors: { id: ['missing value'] } });
	}
	return createResponse({ data: await drinkService.get(params.id) });
};

export const PUT = async ({ request, locals }) => {
	const data: Request.ReplaceDrink = await request.json();
	if (data.userId !== locals.user?.id) {
		return createResponse({
			errors: {
				author: ['invalid user']
			}
		});
	}

	const { success, error } = await validate(data);
	if (!success) {
		return createResponse({ errors: parseZodErrors(error?.errors) });
	}

	const drink = await drinkService.replace(data);
	return createResponse({ data: drink });
};

export const DELETE = async ({ params }) => {
	if (!params.id) {
		return createResponse({
			errors: {
				id: ['invalid id']
			}
		});
	}
	const drinkId = params.id;
	await drinkService.delete(drinkId);
	return createResponse({ data: 'Drink deleted successfully' });
};
