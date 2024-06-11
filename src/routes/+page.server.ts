import type { PageServerLoad } from '../../.svelte-kit/types/src/routes/$types';
import { drinkService } from '$lib/server/services/drinkService';

export const load: PageServerLoad = async () => {
	const drinks = await drinkService.getAll();
	return { drinks };
};
