import { PrismaClient } from '@prisma/client';
import data from './data.json' assert { type: 'json' };

const prisma = new PrismaClient();
async function main() {
	await Promise.all(
		data.map(async (drink) => {
			return await prisma.drink.create({ data: drink });
		})
	);
}
main()
	.then(async () => {
		await prisma.$disconnect();
		console.log('done!');
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
