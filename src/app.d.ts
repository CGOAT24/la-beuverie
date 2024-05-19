// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
		interface ValidationResponse {
			valid: boolean;
			errors: Record<string, unknown>;
		}
	}
}

export {};
