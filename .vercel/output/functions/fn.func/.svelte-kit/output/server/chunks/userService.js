import { p as prisma } from './prisma.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;
const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(saltRounds);
	return await bcrypt.hash(password, salt);
};
const verifyPassword = async (password, hashed) => {
	return await bcrypt.compare(password, hashed);
};
const userService = {
	getFromUsername: async (username) => {
		return prisma.user.findUnique({
			where: {
				username
			}
		});
	},
	createUser: async (input) => {
		const hashedPassword = await hashPassword(input.password);
		return prisma.user.create({
			data: {
				username: input.username,
				password: hashedPassword
			}
		});
	}
};
export { userService as u, verifyPassword as v };
