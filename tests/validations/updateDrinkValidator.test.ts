import { expect, test } from 'vitest';
import { validate } from '$lib/validations/replaceDrinkValidator';

test('invalid input should not be valid', async () => {
	const invalidDrink: Request.ReplaceDrink = {
		id: '',
		name: '',
		directions: '',
		tags: [],
		ingredients: []
	};

	const { error, success } = await validate(invalidDrink);
	expect(success).toBe(false);
	expect(error).toBeDefined();
});

test('valid input should be valid', async () => {
	const drink: Request.ReplaceDrink = {
		id: '6e7caa84-bd44-4f1d-984b-6b9c2e2c67d1',
		directions: 'Mix all ingredients together and serve.',
		ingredients: ['2oz of Vodka', '1oz of orange juice'],
		name: 'unique name',
		tags: ['Orange', 'Vodka', 'Classic'],
		userId: '6e7caa84-bd44-4f1d-984b-6b9c2e2c67d1'
	};

	const { error, success } = await validate(drink);
	console.log({ error, success, drink });
	expect(success).toBeTruthy();
	expect(error).toBeUndefined();
});
