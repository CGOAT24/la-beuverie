export const index = 6;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/drinks/_id_/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/6.Cmofs6W3.js',
	'_app/immutable/chunks/scheduler.Ucs9W-mc.js',
	'_app/immutable/chunks/index.Ci6sy3Wu.js'
];
export const stylesheets = [];
export const fonts = [];
