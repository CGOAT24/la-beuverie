import { describe, expect, it } from 'vitest';
import { type CreateDrinkRequest, validate } from '$lib/validations/createDrinkValidator';

describe('createDrink validation', () => {
	it('invalid input should not be valid', () => {
		const invalidDrink: CreateDrinkRequest = {
			name: '',
			directions: '',
			tags: [],
			ingredients: []
		};

		const { errors, valid } = validate(invalidDrink);

		expect(valid).toBe(false);
		expect(Object.keys(errors).length).toBeGreaterThan(0);
	});

	it('valid input should be valid', () => {
		const drink: CreateDrinkRequest = {
			directions: 'Mix all ingredients together and serve.',
			ingredients: ['2oz of Vodka', '1oz of orange juice'],
			name: 'Screwdriver',
			tags: ['Orange', 'Vodka', 'Classic']
		};

		const { errors, valid } = validate(drink);
		expect(valid).toBeTruthy();
		expect(Object.keys(errors).length).toBe(0);
	});
});
