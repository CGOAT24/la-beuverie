import { Lucia } from 'lucia';
import { D as DEV } from './prod-ssr.js';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { p as prisma } from './prisma.js';
const dev = DEV;
const adapter = new PrismaAdapter(prisma.session, prisma.user);
const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username
		};
	}
});
const authService = {
	createSession: async (userId, event) => {
		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	},
	invalidateSession: async (event) => {
		if (!event.locals.session?.id) {
			return;
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}
};
export { authService as a, lucia as l };
