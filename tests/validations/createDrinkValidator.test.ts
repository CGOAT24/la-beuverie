import { describe, expect, it } from 'vitest';
import { validate } from '$lib/validations/createDrinkValidator';

describe('createDrink validation', () => {
	it('invalid input should not be valid', async () => {
		const invalidDrink: Request.CreateDrink = {
			name: '',
			directions: '',
			tags: [],
			ingredients: [''],
			userId: ''
		};

		const { success, data, error } = await validate(invalidDrink);

		expect(success).toBe(false);
		expect(error).toBeDefined();
		expect(data).toBeUndefined();
	});

	it('valid input should be valid', async () => {
		const drink: Request.CreateDrink = {
			directions: `<p>Mix all ingredients together and serve.</p>`,
			ingredients: ['2oz of vodka', '1oz of orange juice'],
			name: 'TEST - unique drink name',
			tags: ['Orange', 'Vodka', 'Classic'],
			userId: '6e7caa84-bd44-4f1d-984b-6b9c2e2c67d1'
		};

		const { error, success, data } = await validate(drink);
		expect(success).toBeTruthy();
		expect(error).toBeUndefined();
		expect(data).toBeDefined();
	});
});
