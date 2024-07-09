import { writable } from 'svelte/store';
import { request } from '$lib/utils/HTTPRequest';

const createStore = () => {
	const { subscribe, set } = writable<{ id: string; name: string }[]>([]);

	const baseUrl =
		process.env.NODE_ENV === 'production'
			? 'https://la-beuverie.vercel.app'
			: 'http://localhost:5173';

	return {
		subscribe,
		getAll: async () => {
			const { data } = await request.get(`${baseUrl}/api/drinks`);
			console.log(data);
			set(data);
		},
		search: async (text: string) => {
			const url = new URL(`${baseUrl}/api/drinks/search`);
			url.searchParams.append('q', text);
			const { data } = await request.get(url);
			set(data);
		},
		filter: async (tags: string[]) => {
			const url = new URL(`${baseUrl}/api/drinks/filter`);
			const params = new URLSearchParams(tags.map((x) => ['tag', x]));
			url.search = params.toString();
			const { data } = await request.get(url);
			set(data);
		}
	};
};

export const drinks = createStore();
