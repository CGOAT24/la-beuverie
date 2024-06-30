import { drinkService } from '$lib/server/services/drinkService';

export const DELETE = async (event) => {
	const drinkId = event.params.id;
	await drinkService.delete(drinkId);
	return Response.json({ message: 'Drink deleted successfully.' });
};
