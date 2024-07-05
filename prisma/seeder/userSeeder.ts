import data from './data/users.json';
import { Seeder } from './seeder';

export class UserSeeder extends Seeder {
	async up(): Promise<void> {
		console.log('\x1b[44m%s\x1b[0m', 'Seeding users');
		await this.prisma.user.createMany({
			data: data,
			skipDuplicates: true
		});

		console.log('\x1b[42m%s\x1b[0m', 'Done');
	}
	async down(): Promise<void> {
		console.log('\x1b[44m%s\x1b[0m', 'Deleting users...');
		await this.prisma.user.deleteMany();
		console.log('\x1b[42m%s\x1b[0m', 'Done');
	}
}
