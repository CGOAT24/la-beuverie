import type { RequestHandler } from '@sveltejs/kit';
import { searchService } from '$lib/server/services/searchService';
import { createResponse } from '$lib/utils/HTTPRequest';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('q');
	if (!query) {
		return createResponse({
			errors: {
				query: ['missing value']
			}
		});
	}
	return createResponse({ data: await searchService.search(query) });
};
