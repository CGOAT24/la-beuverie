import { f as fail, r as redirect } from '../../../../chunks/index.js';
import { p as prisma } from '../../../../chunks/prisma.js';
import { p as parse } from '../../../../chunks/formDataParser.js';
import { u as userService } from '../../../../chunks/userService.js';
import { a as authService } from '../../../../chunks/authService.js';
const validate = async (request) => {
	const errors = {};
	if (!request.username) {
		errors.username = 'Username is required';
	} else if (request.username.length < 3 || request.username.length > 31) {
		errors.username = 'Username length must be between 3 and 31';
	} else if (!/^[a-z0-9_-]+$/.test(request.username)) {
		errors.username = 'Invalid username';
	}
	if (request.password.length < 6 || request.password.length > 255) {
		errors.password = 'Password length must be at least 6 characters';
	}
	const duplicate = await prisma.user.findUnique({
		where: {
			username: request.username
		}
	});
	if (duplicate) {
		errors.username = 'Username is already used';
	}
	return {
		errors,
		valid: Object.keys(errors).length === 0
	};
};
const actions = {
	default: async (event) => {
		const input = parse(await event.request.formData());
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
export { actions };
