import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export { server };
export const server_id = 'src/routes/+layout.server.ts';
export const imports = [
	'_app/immutable/nodes/0.Q_5NMd_l.js',
	'_app/immutable/chunks/scheduler.Ucs9W-mc.js',
	'_app/immutable/chunks/index.Ci6sy3Wu.js',
	'_app/immutable/chunks/Icon.sYldm0hB.js',
	'_app/immutable/chunks/each.D6YF6ztN.js'
];
export const stylesheets = ['_app/immutable/assets/0.BjY1zuSv.css'];
export const fonts = [];
