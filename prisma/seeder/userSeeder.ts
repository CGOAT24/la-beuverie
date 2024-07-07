import users from './data/users.json';
import { Seeder } from './seeder';
import { hashPassword } from '../../src/lib/server/hash';

export class UserSeeder extends Seeder {
	async up(): Promise<void> {
		console.log('\x1b[44m%s\x1b[0m', 'Seeding users');

		const data = await Promise.all(
			users.map(async (x) => {
				x.password = await hashPassword(x.password);
				return x;
			})
		);

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
