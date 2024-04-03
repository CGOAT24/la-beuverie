export interface LoginUserRequest {
	username: string;
	password: string;
}

export const validate = (request: LoginUserRequest): App.ValidationResponse => {
	const errors: Record<string, unknown> = {};
	if (!request.username) {
		errors.username = 'Invalid credentials';
	}

	if (!request.password) {
		errors.password = 'Invalid credentials';
	}

	return {
		errors: errors,
		valid: Object.keys(errors).length === 0
	};
};
