import type { RequestHandler } from '@sveltejs/kit';
import { searchService } from '$lib/server/services/searchService';

export const GET: RequestHandler = async ({ url }) => {
	const tags = [...url.searchParams.getAll('tag')];
	if (!tags) {
		return Response.error();
	}
	return Response.json(await searchService.filter(tags));
};
