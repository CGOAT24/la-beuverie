import { type Actions, fail, redirect } from '@sveltejs/kit';
import { authService } from '$lib/server/services/authService';

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await authService.invalidateSession(event);
		redirect(302, '/');
	}
};
