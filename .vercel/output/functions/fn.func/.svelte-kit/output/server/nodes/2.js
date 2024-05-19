import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/2.Dv6lztwA.js',
	'_app/immutable/chunks/scheduler.Ucs9W-mc.js',
	'_app/immutable/chunks/index.Ci6sy3Wu.js',
	'_app/immutable/chunks/each.D6YF6ztN.js'
];
export const stylesheets = [];
export const fonts = [];
