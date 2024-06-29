import { type SafeParseReturnType, z } from 'zod';
import { userService } from '$lib/server/services/userService';

const SignupUserRequest = z.object({
	username: z
		.string()
		.min(3)
		.max(100)
		.superRefine(async (username, ctx) => {
			if ((await userService.getFromUsername(username)) !== null) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'username already taken'
				});
			}
			if (!/^[a-z0-9_-]+$/.test(username)) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'invalid username'
				});
			}
		}),
	password: z.string().min(8)
});

export const validate = async (
	request: Request.SignupUser
): Promise<SafeParseReturnType<Request.SignupUser, Request.SignupUser>> =>
	await SignupUserRequest.safeParseAsync(request);
