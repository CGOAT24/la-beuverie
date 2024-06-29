import { userService } from '$lib/server/services/userService';
import { verifyPassword } from '$lib/server/hash';
import { type SafeParseReturnType, z } from 'zod';

const LoginUserRequest = z
	.object({
		username: z
			.string()
			.min(3)
			.max(50)
			.refine(
				async (username) => {
					const user = await userService.getFromUsername(username);
					return !!user;
				},
				{
					message: "User doesn't exist"
				}
			),
		password: z.string().min(1)
	})
	.refine(
		async (user) => {
			const password = (await userService.getFromUsername(user.username))?.password;
			return await verifyPassword(user.password, password ?? '');
		},
		{
			message: 'Invalid credentials'
		}
	);

export type LoginUserRequest = z.infer<typeof LoginUserRequest>;

export const validate = async (
	request: LoginUserRequest
): Promise<SafeParseReturnType<LoginUserRequest, LoginUserRequest>> => {
	return await LoginUserRequest.safeParseAsync(request);
};
