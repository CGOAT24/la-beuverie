import { writable } from 'svelte/store';

const createStore = () => {
	const { subscribe, set } = writable<{ id: string; name: string }[]>([]);

	return {
		subscribe,
		getAll: async () => {
			const data = await (
				await fetch(`http://localhost:5173/api/drinks`, { method: 'GET' })
			).json();
			set(data);
		},
		search: async (text: string) => {
			const url = new URL(`http://localhost:5173/api/drinks/search`);
			url.searchParams.append('q', text);
			set(await (await fetch(url.toString(), { method: 'GET' })).json());
		},
		filter: async (tags: string[]) => {
			const url = new URL(`http://localhost:5173/api/drinks/filter`);
			const params = new URLSearchParams(tags.map((x) => ['tag', x]));
			url.search = params.toString();
			set(await (await fetch(url.toString(), { method: 'GET' })).json());
		}
	};
};

export const drinks = createStore();
