import { expect, test } from 'vitest';
import { type SignupUserRequest, validate } from '$lib/validations/signupUserValidator';

test('invalid input should not be valid', async () => {
	const invalid: SignupUserRequest = {
		username: 'a',
		password: 'a'
	};

	const { errors, valid } = await validate(invalid);

	expect(valid).toBe(false);
	expect(Object.keys(errors).length).toBeGreaterThan(0);
});

test('valid input should be valid', async () => {
	const request: SignupUserRequest = {
		username: 'user12345',
		password: 'MySecurePassword'
	};

	const { errors, valid } = await validate(request);
	expect(valid).toBe(true);
	expect(Object.keys(errors).length).toBe(0);
});
