import type { RequestHandler } from '@sveltejs/kit';
import { drinkService } from '$lib/server/services/drinkService';
import { createResponse } from '$lib/utils/HTTPRequest';

export const GET: RequestHandler = async () => {
	return createResponse({ data: await drinkService.getTags() });
};
