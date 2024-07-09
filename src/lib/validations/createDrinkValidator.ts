import { type SafeParseReturnType, z } from 'zod';
import { drinkService } from '$lib/server/services/drinkService';

const CreateDrinkRequest = z.object({
	name: z
		.string()
		.min(3)
		.max(100)
		.refine(
			async (name) => {
				return (await drinkService.getFromName(name)) === null;
			},
			{
				message: 'Name already exists'
			}
		),
	directions: z.string().min(3).max(1000),
	tags: z.string().array(),
	ingredients: z.string().array().nonempty(),
	userId: z.string().uuid()
});

export const validate = async (
	request: Request.CreateDrink
): Promise<SafeParseReturnType<Request.CreateDrink, Request.CreateDrink>> =>
	await CreateDrinkRequest.safeParseAsync(request);
