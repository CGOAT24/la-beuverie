export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set([]),
		mimeTypes: {},
		_: {
			client: {
				start: '_app/immutable/entry/start.COjjkuFW.js',
				app: '_app/immutable/entry/app.E2FmxN1K.js',
				imports: [
					'_app/immutable/entry/start.COjjkuFW.js',
					'_app/immutable/chunks/entry.Cxr1BC7q.js',
					'_app/immutable/chunks/scheduler.Ucs9W-mc.js',
					'_app/immutable/entry/app.E2FmxN1K.js',
					'_app/immutable/chunks/scheduler.Ucs9W-mc.js',
					'_app/immutable/chunks/index.Ci6sy3Wu.js'
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import('../output/server/nodes/0.js')),
				__memo(() => import('../output/server/nodes/1.js')),
				__memo(() => import('../output/server/nodes/2.js')),
				__memo(() => import('../output/server/nodes/3.js')),
				__memo(() => import('../output/server/nodes/4.js')),
				__memo(() => import('../output/server/nodes/5.js')),
				__memo(() => import('../output/server/nodes/6.js')),
				__memo(() => import('../output/server/nodes/7.js'))
			],
			routes: [
				{
					id: '/',
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 2 },
					endpoint: null
				},
				{
					id: '/auth/login',
					pattern: /^\/auth\/login\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 3 },
					endpoint: null
				},
				{
					id: '/auth/logout',
					pattern: /^\/auth\/logout\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 4 },
					endpoint: null
				},
				{
					id: '/auth/signup',
					pattern: /^\/auth\/signup\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 5 },
					endpoint: null
				},
				{
					id: '/drinks/add',
					pattern: /^\/drinks\/add\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 7 },
					endpoint: null
				},
				{
					id: '/drinks/[id]',
					pattern: /^\/drinks\/([^/]+?)\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0], errors: [1], leaf: 6 },
					endpoint: null
				}
			],
			matchers: async () => {
				return {};
			},
			server_assets: {}
		}
	};
})();
