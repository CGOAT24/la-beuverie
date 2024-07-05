import { PrismaClient } from '@prisma/client';

export abstract class Seeder {
	prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	abstract up(): Promise<void>;
	abstract down(): Promise<void>;
}
