import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';
import { drinkService } from '$lib/server/services/drinkService';

export const load: LayoutServerLoad = async (event) => {
	const tags = await drinkService.getTags();
	const isAuthenticated = event.locals.user;
	return {
		tags,
		isAuthenticated
	};
};
