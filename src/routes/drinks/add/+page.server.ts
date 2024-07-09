import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { drinkService } from '$lib/server/services/drinkService';

export const load: PageServerLoad = async (event) => {
	const tags = await drinkService.getTags();
	if (!event.locals.user) {
		redirect(302, '/auth/login');
	}
	return { tags };
};
