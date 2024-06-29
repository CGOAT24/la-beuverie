import { drinkService } from '$lib/server/services/drinkService';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const userId = event.locals.user?.id;
	const { id } = event.params;
	const drink = await drinkService.get(id);
	if (userId !== drink?.userId) {
		error(401, { message: 'unauthorized' });
	}
	return { drink };
};
