import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import data from '$lib/data.json';

try {
	await Promise.all(
		data.map(async (drink) => {
			return await prisma.drink.create({
				data: drink
			});
		})
	);
	console.log('done!');
} catch (e) {
	console.error(e);
}
