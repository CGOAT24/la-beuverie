import type { PageServerLoad } from './$types';
import { drinkService } from '$lib/server/services/drinkService';

export const load: PageServerLoad = async (event) => {
	const userId = event.locals.user?.id;
	const { id } = event.params;
	const drink = await drinkService.get(id);
	return { drink, isAuthor: userId === drink?.userId };
};
