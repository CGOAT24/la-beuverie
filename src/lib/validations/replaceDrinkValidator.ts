import { type SafeParseReturnType, z } from 'zod';
import { drinkService } from '$lib/server/services/drinkService';

const ReplaceDrinkRequest = z
	.object({
		id: z.string().uuid(),
		name: z.string().min(3).max(100),
		directions: z.string().min(3).max(1000),
		tags: z.string().array(),
		userId: z.string().uuid()
	})
	.refine(
		async (drink) => {
			const data = await drinkService.getFromName(drink.name);
			return data?.id !== drink.id;
		},
		{
			message: 'name already exists'
		}
	);

export const validate = async (
	request: Request.ReplaceDrink
): Promise<SafeParseReturnType<Request.ReplaceDrink, Request.ReplaceDrink>> =>
	await ReplaceDrinkRequest.safeParseAsync(request);
