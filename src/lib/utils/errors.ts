import type { ZodIssue } from 'zod';

export const parseZodErrors = (zodErrors: ZodIssue[]): Record<string, string[]> => {
	const errors: Record<string, string[]> = {};

	zodErrors.forEach((error) => {
		const path = error.path.join('.');
		if (!errors[path]) {
			errors[path] = [];
		}
		errors[path].push(error.message);
	});

	return errors;
};
