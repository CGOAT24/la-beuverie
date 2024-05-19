import { expect, test } from 'vitest';
import type { SignupUserRequest } from '$lib/validations/signupUserValidator';
import { parse } from '$lib/server/formDataParser';

test('valid input should be parsed', async () => {
	const formData = new FormData();
	formData.set('username', 'test_A');
	formData.set('password', 'test_B');

	const result = parse<SignupUserRequest>(formData);

	expect(result.username).toBe('test_A');
	expect(result.password).toBe('test_B');
});
