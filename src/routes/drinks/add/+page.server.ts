import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { type CreateDrinkRequest, validate } from '$lib/validations/createDrinkValidator';
import { parse } from '$lib/server/formDataParser';
import { drinkService } from '$lib/server/services/drinkService';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(302, '/auth/login');
	}
	return {
		username: event.locals.user.username
	};
};

export const actions = {
	default: async ({ request }) => {
		const drink = parse<CreateDrinkRequest>(await request.formData());

		const { valid, errors } = validate(drink);
		if (!valid) {
			return fail(400, errors);
		}

		await drinkService.create(drink);

		throw redirect(303, '/');
	}
} satisfies Actions;
