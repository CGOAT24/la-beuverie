import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		coverage: {
			include: ['src/lib/**/*.ts'],
			reporter: [['text']]
		}
	}
});
