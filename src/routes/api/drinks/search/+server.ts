import type { RequestHandler } from '@sveltejs/kit';
import { searchService } from '$lib/server/services/searchService';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('q');
	if (!query) {
		return Response.error();
	}
	return Response.json(await searchService.search(query));
};
