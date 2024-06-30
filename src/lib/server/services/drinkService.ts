import prisma from '$lib/prisma';
import type { Drink } from '@prisma/client';

export const drinkService = {
	create: async (drink: Request.CreateDrink): Promise<Drink> => {
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
	getFromName: async (name: string): Promise<Drink | null> => {
		return prisma.drink.findUnique({
			where: {
				name
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
	},
	replace: async (drink: Request.ReplaceDrink): Promise<Drink> => {
		return prisma.drink.update({
			where: {
				id: drink.id
			},
			data: drink
		});
	},
	delete: async (id: string): Promise<void> => {
		await prisma.drink.delete({
			where: {
				id: id
			}
		});
	}
};
