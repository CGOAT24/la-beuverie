import { type Actions, fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import { lucia } from '$lib/server/auth';
import { validate } from '$lib/validations/loginUserValidator';
import prisma from '$lib/prisma';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;

		const { errors, valid } = validate({
			username,
			password
		});

		if (!valid) {
			return fail(400, errors);
		}

		const user = await prisma.user.findUnique({
			where: {
				username
			}
		});

		if (!user) {
			return fail(400, {
				message: 'Invalid credentials'
			});
		}

		const validPassword = await new Argon2id().verify(user.password, password);
		if (!validPassword) {
			return fail(400, {
				message: 'Invalid credentials'
			});
		}

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};
