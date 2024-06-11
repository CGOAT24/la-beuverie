import prisma from '$lib/prisma';
import type { CreateDrinkRequest } from '$lib/validations/createDrinkValidator';
import type { Drink } from '@prisma/client';

export const drinkService = {
	create: async (drink: CreateDrinkRequest): Promise<Drink> => {
		return prisma.drink.create({
			data: drink
		});
	},
	getAll: async (): Promise<{ id: string; name: string }[]> => {
		return prisma.drink.findMany({
			select: {
				id: true,
				name: true
			}
		});
	},
	get: async (id: string): Promise<Drink | null> => {
		return prisma.drink.findUnique({
			where: {
				id
			}
		});
	},
	getTags: async (): Promise<string[]> => {
		const drinks = await prisma.drink.findMany({
			select: {
				tags: true
			}
		});
		const tags = drinks.map((drink) => drink.tags);
		return Array.from(new Set(tags.flat()));
	}
};
