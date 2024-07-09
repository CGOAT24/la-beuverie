import { type Actions, fail, redirect } from '@sveltejs/kit';
import { validate } from '$lib/validations/signupUserValidator';
import { parse } from '$lib/server/formDataParser';
import { userService } from '$lib/server/services/userService';
import { authService } from '$lib/server/services/authService';
import { parseZodErrors } from '$lib/utils/errors';

export const actions: Actions = {
	default: async (event) => {
		const input = parse<Request.SignupUser>(await event.request.formData());
		const { error, success } = await validate(input);

		if (!success) {
			return fail(400, {
				errors: parseZodErrors(error?.errors)
			});
		}

		const user = await userService.createUser(input);
		if (user) {
			await authService.createSession(user.id, event);
		}

		redirect(302, '/');
	}
};
