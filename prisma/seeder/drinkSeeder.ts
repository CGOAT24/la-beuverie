import { Seeder } from './seeder';
import drinks from './data/drinks.json';

export class DrinkSeeder extends Seeder {
	async up(): Promise<void> {
		console.log('\x1b[44m%s\x1b[0m', 'Seeding drinks...');
		const userIds = await this.prisma.user.findMany({
			select: {
				id: true
			}
		});

		const data = drinks.map((x) => {
			x.userId = userIds[Math.floor(Math.random() * userIds.length)].id;
			return x;
		});

		await this.prisma.drink.createMany({
			data
		});

		console.log('\x1b[42m%s\x1b[0m', 'Done');
	}
	async down(): Promise<void> {
		console.log('\x1b[44m%s\x1b[0m', 'Deleting drinks...');
		await this.prisma.drink.deleteMany();
		console.log('\x1b[42m%s\x1b[0m', 'Done');
	}
}
