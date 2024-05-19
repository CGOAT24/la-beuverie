import { f as fail, r as redirect } from '../../../../chunks/index.js';
import { a as authService } from '../../../../chunks/authService.js';
const actions = {
	default: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await authService.invalidateSession(event);
		redirect(302, '/');
	}
};
export { actions };
