import prisma from '$lib/prisma';
import type { User } from '@prisma/client';
import type { SignupUserRequest } from '$lib/validations/signupUserValidator';
import { hashPassword } from '$lib/server/hash';

export const userService = {
	getFromUsername: async (username: string): Promise<User | null> => {
		return prisma.user.findUnique({
			where: {
				username: username
			}
		});
	},
	createUser: async (input: SignupUserRequest): Promise<User | null> => {
		const hashedPassword = await hashPassword(input.password);

		return prisma.user.create({
			data: {
				username: input.username,
				password: hashedPassword
			}
		});
	}
};
