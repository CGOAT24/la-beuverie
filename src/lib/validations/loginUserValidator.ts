import { userService } from '$lib/server/services/userService';
import { verifyPassword } from '$lib/server/hash';

export interface LoginUserRequest {
	username: string;
	password: string;
	credentials: string;
}

export const validate = async (request: LoginUserRequest): Promise<App.ValidationResponse> => {
	const errors: Record<string, unknown> = {};
	if (!request.username) {
		errors.username = 'Invalid credentials';
	}

	if (!request.password) {
		errors.password = 'Invalid credentials';
	}

	if (Object.keys(errors).length > 0) {
		return {
			errors: errors,
			valid: false
		};
	}

	const user = await userService.getFromUsername(request.username);

	if (!user) {
		errors.credentials = 'Invalid credentials';
		return {
			errors: errors,
			valid: false
		};
	}

	const validPassword = verifyPassword(request.password, user.password);

	if (!validPassword) {
		errors.credentials = 'Invalid credentials';
	}

	return {
		errors: errors,
		valid: Object.keys(errors).length === 0
	};
};
