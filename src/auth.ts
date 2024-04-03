import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';

const githubId = '51f065c90b6bc7a15166';
const githubSecret = '0b23fb2658f09618008c93f2052675e5092d4748';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [GitHub({ clientId: githubId, clientSecret: githubSecret })]
});
