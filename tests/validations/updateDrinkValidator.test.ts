import { expect, test } from 'vitest';
import type { Drink } from '@prisma/client';
import { validate } from '$lib/validations/updateDrinkValidator';

test('invalid input should not be valid', () => {
	const invalidDrink: Drink = {
		id: '',
		name: '',
		directions: '',
		tags: [],
		ingredients: []
	};

	const { errors, valid } = validate(invalidDrink);

	expect(valid).toBe(false);
	expect(Object.keys(errors).length).toBeGreaterThan(0);
});

test('valid input should be valid', () => {
	const drink: Drink = {
		id: '0000-1111-AAAA-BBBB',
		directions: 'Mix all ingredients together and serve.',
		ingredients: ['2oz of Vodka', '1oz of orange juice'],
		name: 'Screwdriver',
		tags: ['Orange', 'Vodka', 'Classic']
	};

	const { errors, valid } = validate(drink);
	expect(valid).toBe(true);
	expect(Object.keys(errors).length).toBe(0);
});
