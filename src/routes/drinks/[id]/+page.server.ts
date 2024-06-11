import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/drinks/add/$types';
import { drinkService } from '$lib/server/services/drinkService';

export const load: PageServerLoad = async (event) => {
	const id = event.params.id;
	const drink = await drinkService.get(id);
	return { drink };
};
