import type { RequestHandler } from '@sveltejs/kit';
import { searchService } from '$lib/server/services/searchService';
import { createResponse } from '$lib/utils/HTTPRequest';

export const GET: RequestHandler = async ({ url }) => {
	const tags = [...url.searchParams.getAll('tag')];
	if (!tags) {
		return createResponse({
			errors: {
				tags: ['missing value']
			}
		});
	}
	return createResponse({ data: await searchService.filter(tags) });
};
