import { writable } from 'svelte/store';
import { request } from '$lib/utils/HTTPRequest';

const createStore = async () => {
	const baseUrl =
		process.env.NODE_ENV === 'production'
			? 'https://la-beuverie.vercel.app'
			: 'http://localhost:5173';

	const { data } = await request.get(`${baseUrl}/api/tags`);
	return writable<string[]>(data);
};

export const tags = await createStore();
