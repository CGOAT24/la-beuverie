import type { RequestHandler } from '@sveltejs/kit';
import { drinkService } from '$lib/server/services/drinkService';

export const GET: RequestHandler = async () => {
	return Response.json(await drinkService.getTags());
};
