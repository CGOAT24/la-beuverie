import prisma from '$lib/prisma';
import type { CreateDrinkRequest } from '$lib/validations/createDrinkValidator';
import type { Drink } from '@prisma/client';

export const drinkService = {
	create: async (drink: CreateDrinkRequest): Promise<Drink> => {
		return prisma.drink.create({
			data: drink
		});
	}
};
