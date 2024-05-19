export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.bU3q13PI.js',
	'_app/immutable/chunks/scheduler.Ucs9W-mc.js',
	'_app/immutable/chunks/index.Ci6sy3Wu.js',
	'_app/immutable/chunks/entry.Cxr1BC7q.js'
];
export const stylesheets = [];
export const fonts = [];
