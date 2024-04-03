import { expect, test } from 'vitest';
import { type SignupUserRequest, validate } from '$lib/validations/signupUserValidator';
import type { Drink } from '@prisma/client';

test('invalid input should not be valid', () => {
	const invalid: SignupUserRequest = {
		username: 'a',
		password: 'a'
	};

	const { errors, valid } = validate(invalid);

	expect(valid).toBe(false);
	expect(Object.keys(errors).length).toBeGreaterThan(0);
});

test('valid input should be valid', () => {
	const request: SignupUserRequest = {
		username: "user12345",
		password: "MySecurePassword"
	};

	const { errors, valid } = validate(request);
	expect(valid).toBe(true);
	expect(Object.keys(errors).length).toBe(0);
});
