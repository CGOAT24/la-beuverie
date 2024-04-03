import prisma from '$lib/prisma';

export interface SignupUserRequest {
	username: string;
	password: string;
}

export const validate = async (request: SignupUserRequest): Promise<App.ValidationResponse> => {
	const errors: Record<string, unknown> = {};
	if (!request.username) {
		errors.username = 'Username is required';
	} else if (request.username.length < 3 || request.username.length > 31) {
		errors.username = 'Username length must be between 3 and 31';
	} else if (!/^[a-z0-9_-]+$/.test(request.username)) {
		errors.username = 'Invalid username';
	}

	const duplicate = await prisma.user.findUnique({
		where: {
			username: request.username
		}
	});

	if (duplicate) {
		errors.username = 'Username is already used';
	}

	if (request.password.length < 6 || request.password.length > 255) {
		errors.password = 'Password length must be at least 6 characters';
	}

	return {
		errors: errors,
		valid: Object.keys(errors).length === 0
	};
};
