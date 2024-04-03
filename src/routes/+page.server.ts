import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const drinks = await prisma.drink.findMany();
	return { drinks };
};
