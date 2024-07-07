import { writable } from 'svelte/store';

const createStore = async () => {
	return writable<string[]>(
		await (await fetch(`http://localhost:5173/api/tags`, { method: 'GET' })).json()
	);
};

export const tags = await createStore();
