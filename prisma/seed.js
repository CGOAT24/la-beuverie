import { PrismaClient } from '@prisma/client';
import data from './data.json' assert { type: 'json' };
import * as argon2 from 'argon2';

const prisma = new PrismaClient();
async function main() {
	const { id } = await prisma.user.create({
		data: {
			username: 'cgoat24',
			password: await argon2.hash('fov086')
		}
	});
	await Promise.all(
		data.map(async (drink) => {
			drink.userId = id;
			return prisma.drink.create({ data: drink });
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
