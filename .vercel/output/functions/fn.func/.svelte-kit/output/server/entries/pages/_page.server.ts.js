import { p as prisma } from '../../chunks/prisma.js';
const load = async () => {
	const drinks = await prisma.drink.findMany();
	return { drinks };
};
export { load };
