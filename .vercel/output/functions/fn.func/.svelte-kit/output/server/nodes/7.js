import * as server from '../entries/pages/drinks/add/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/drinks/add/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/drinks/add/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/7.BEMrn9ra.js',
	'_app/immutable/chunks/scheduler.Ucs9W-mc.js',
	'_app/immutable/chunks/index.Ci6sy3Wu.js',
	'_app/immutable/chunks/Row.BB-NZ5Zz.js',
	'_app/immutable/chunks/each.D6YF6ztN.js',
	'_app/immutable/chunks/Icon.sYldm0hB.js'
];
export const stylesheets = ['_app/immutable/assets/7.-UVqDr7g.css'];
export const fonts = [];
