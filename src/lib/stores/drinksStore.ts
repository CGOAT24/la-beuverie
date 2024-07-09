import { writable } from 'svelte/store';
import { request } from '$lib/utils/HTTPRequest';

const createStore = () => {
	const { subscribe, set } = writable<{ id: string; name: string }[]>([]);

	return {
		subscribe,
		getAll: async () => {
			const { data } = await request.get(`http://localhost:5173/api/drinks`);
			set(data);
		},
		search: async (text: string) => {
			const url = new URL(`http://localhost:5173/api/drinks/search`);
			url.searchParams.append('q', text);
			const { data } = await request.get(url);
			set(data);
		},
		filter: async (tags: string[]) => {
			const url = new URL(`http://localhost:5173/api/drinks/filter`);
			const params = new URLSearchParams(tags.map((x) => ['tag', x]));
			url.search = params.toString();
			const { data } = await request.get(url);
			set(data);
		}
	};
};

export const drinks = createStore();
