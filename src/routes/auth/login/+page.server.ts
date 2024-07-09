import { type Actions, fail, redirect } from '@sveltejs/kit';
import { type LoginUserRequest, validate } from '$lib/validations/loginUserValidator';
import { parse } from '$lib/server/formDataParser';
import { userService } from '$lib/server/services/userService';
import type { User } from '@prisma/client';
import { authService } from '$lib/server/services/authService';
import { parseZodErrors } from '$lib/utils/errors';

export const actions: Actions = {
	default: async (event) => {
		const input = parse<LoginUserRequest>(await event.request.formData());
		const { success, error } = await validate(input);
		if (!success) {
			return fail(400, { errors: parseZodErrors(error?.errors) });
		}

		const user: User | null = await userService.getFromUsername(input.username);
		if (user) {
			await authService.createSession(user.id, event);
		}

		redirect(302, '/');
	}
};
