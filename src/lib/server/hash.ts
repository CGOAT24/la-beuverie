import * as argon2 from 'argon2';

export const hashPassword = async (password: string): Promise<string> => {
	return await argon2.hash(password);
};

export const verifyPassword = async (password: string, hashed: string): Promise<boolean> => {
	return await argon2.verify(hashed, password);
};
