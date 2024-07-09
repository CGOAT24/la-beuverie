import { writable } from 'svelte/store';
import { request } from '$lib/utils/HTTPRequest';

const createStore = async () => {
	const { data } = await request.get(`http://localhost:5173/api/tags`);
	return writable<string[]>(data);
};

export const tags = await createStore();
