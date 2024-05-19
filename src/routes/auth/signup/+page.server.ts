import { type Actions, fail, redirect } from '@sveltejs/kit';
import { type SignupUserRequest, validate } from '$lib/validations/signupUserValidator';
import { parse } from '$lib/server/formDataParser';
import { userService } from '$lib/server/services/userService';
import { authService } from '$lib/server/services/authService';

export const actions: Actions = {
	default: async (event) => {
		const input = parse<SignupUserRequest>(await event.request.formData());
		const { errors, valid } = await validate(input);

		if (!valid) {
			return fail(400, errors);
		}

		const user = await userService.createUser(input);
		if (user) {
			await authService.createSession(user.id, event);
		}

		redirect(302, '/');
	}
};
