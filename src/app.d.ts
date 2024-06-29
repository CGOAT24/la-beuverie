// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { z } from 'zod';

declare global {
	namespace App {
		interface Locals {
			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
	}
	namespace Request {
		type CreateDrink = z.infer<typeof CreateDrinkRequest>;
		type ReplaceDrink = z.infer<typeof ReplaceDrinkRequest>;
		type SignupUser = z.infer<typeof SignupUserRequest>;
	}
}

export {};
