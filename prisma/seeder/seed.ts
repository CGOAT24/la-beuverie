import { PrismaClient } from '@prisma/client';
import { UserSeeder } from './userSeeder';
import { DrinkSeeder } from './drinkSeeder';

const prisma = new PrismaClient();

async function main() {
	const userSeeder = new UserSeeder(prisma);
	const drinkSeeder = new DrinkSeeder(prisma);
	const seeders = [userSeeder, drinkSeeder];

	const command = process.argv[2];
	switch (command) {
		case 'up':
			for (const seeder of seeders) {
				await seeder.up();
			}
			break;
		case 'down':
			for (const seeder of seeders.toReversed()) {
				await seeder.down();
			}
			break;
		case 'reset':
			for (const seeder of seeders.toReversed()) {
				await seeder.down();
			}
			for (const seeder of seeders) {
				await seeder.up();
			}
			break;
		default:
			console.error('Please specify a command: up, down or reset');
			break;
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
