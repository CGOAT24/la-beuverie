import { type Actions, fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import { lucia } from '$lib/server/auth';
import prisma from '$lib/prisma';
import { validate } from '$lib/validations/signupUserValidator';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;

		const { errors, valid } = await validate({ username, password });
		if (!valid) {
			return fail(400, errors);
		}

		const hashedPassword = await new Argon2id().hash(password);

		const user = await prisma.user.create({
			data: {
				username: username,
				password: hashedPassword
			}
		});

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};
