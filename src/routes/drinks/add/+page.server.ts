import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { validate } from '$lib/validations/createDrinkValidator';

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
		const data = await request.formData();

		const name: string = data.get('name') as string;
		const directions: string = data.get('directions') as string;
		const tags: string[] = data.get('tags') as unknown as string[];
		const ingredients: string[] = data.get('ingredients') as unknown as string[];

		const drink = { name, directions, tags, ingredients };

		const { valid, errors } = validate(drink);
		if (!valid) {
			return fail(400, errors);
		}

		return;

		await prisma.drink.create({
			data: drink
		});

		throw redirect(303, '/');
	}
} satisfies Actions;
