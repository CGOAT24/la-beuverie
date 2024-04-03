import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutServerLoad = async (event) => {
	const isAuthenticated = event.locals.user;
	return {
		isAuthenticated
	};
};
