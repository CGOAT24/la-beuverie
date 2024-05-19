import { expect, expectTypeOf, test } from 'vitest';
import { hashPassword, verifyPassword } from '$lib/server/hash';

test('hash test', async () => {
	const data = 'password';
	const hashed = await hashPassword(data);

	expectTypeOf(hashed).toBeString();
});

test('verify test', async () => {
	const data = 'password';
	const hashed = await hashPassword(data);

	expect(await verifyPassword(data, hashed)).toBeTruthy();
});
