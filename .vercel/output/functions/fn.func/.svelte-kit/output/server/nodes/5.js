import * as server from '../entries/pages/auth/signup/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/auth/signup/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/auth/signup/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/5.DJDe9LXw.js',
	'_app/immutable/chunks/scheduler.Ucs9W-mc.js',
	'_app/immutable/chunks/index.Ci6sy3Wu.js',
	'_app/immutable/chunks/Row.BB-NZ5Zz.js'
];
export const stylesheets = [];
export const fonts = [];
