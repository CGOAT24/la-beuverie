import { f as fail, r as redirect } from '../../../../chunks/index.js';
import { u as userService, v as verifyPassword } from '../../../../chunks/userService.js';
import { p as parse } from '../../../../chunks/formDataParser.js';
import { a as authService } from '../../../../chunks/authService.js';
const validate = async (request) => {
	const errors = {};
	if (!request.username) {
		errors.username = 'Invalid credentials';
	}
	if (!request.password) {
		errors.password = 'Invalid credentials';
	}
	if (Object.keys(errors).length > 0) {
		return {
			errors,
			valid: false
		};
	}
	const user = await userService.getFromUsername(request.username);
	if (!user) {
		errors.credentials = 'Invalid credentials';
		return {
			errors,
			valid: false
		};
	}
	const validPassword = verifyPassword(request.password, user.password);
	if (!validPassword) {
		errors.credentials = 'Invalid credentials';
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
		const user = await userService.getFromUsername(input.username);
		if (user) {
			await authService.createSession(user.id, event);
		}
		redirect(302, '/');
	}
};
export { actions };
