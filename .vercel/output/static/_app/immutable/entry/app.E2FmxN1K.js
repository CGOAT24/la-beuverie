const __vite__fileDeps = [
		'../nodes/0.Q_5NMd_l.js',
		'../chunks/scheduler.Ucs9W-mc.js',
		'../chunks/index.Ci6sy3Wu.js',
		'../chunks/Icon.sYldm0hB.js',
		'../chunks/each.D6YF6ztN.js',
		'../assets/0.BjY1zuSv.css',
		'../nodes/1.bU3q13PI.js',
		'../chunks/entry.Cxr1BC7q.js',
		'../nodes/2.Dv6lztwA.js',
		'../nodes/3.BbVk5je-.js',
		'../chunks/Row.BB-NZ5Zz.js',
		'../nodes/5.DJDe9LXw.js',
		'../nodes/6.Cmofs6W3.js',
		'../nodes/7.BEMrn9ra.js',
		'../assets/7.-UVqDr7g.css'
	],
	__vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
	s as q,
	a as B,
	x as h,
	d as U,
	i as E,
	f as g,
	a2 as j,
	z,
	e as W,
	c as F,
	b as G,
	h as T,
	u as d,
	t as H,
	k as J,
	l as K,
	$ as D,
	a3 as y,
	a1 as Q
} from '../chunks/scheduler.Ucs9W-mc.js';
import {
	S as X,
	i as Y,
	b as w,
	e as O,
	t as b,
	g as A,
	c as P,
	a as I,
	m as R,
	d as L
} from '../chunks/index.Ci6sy3Wu.js';
const Z = 'modulepreload',
	M = function (a, e) {
		return new URL(a, e).href;
	},
	S = {},
	p = function (e, n, i) {
		let r = Promise.resolve();
		if (n && n.length > 0) {
			const _ = document.getElementsByTagName('link'),
				t = document.querySelector('meta[property=csp-nonce]'),
				s = (t == null ? void 0 : t.nonce) || (t == null ? void 0 : t.getAttribute('nonce'));
			r = Promise.all(
				n.map((o) => {
					if (((o = M(o, i)), o in S)) return;
					S[o] = !0;
					const f = o.endsWith('.css'),
						l = f ? '[rel="stylesheet"]' : '';
					if (!!i)
						for (let k = _.length - 1; k >= 0; k--) {
							const v = _[k];
							if (v.href === o && (!f || v.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${o}"]${l}`)) return;
					const u = document.createElement('link');
					if (
						((u.rel = f ? 'stylesheet' : Z),
						f || ((u.as = 'script'), (u.crossOrigin = '')),
						(u.href = o),
						s && u.setAttribute('nonce', s),
						document.head.appendChild(u),
						f)
					)
						return new Promise((k, v) => {
							u.addEventListener('load', k),
								u.addEventListener('error', () => v(new Error(`Unable to preload CSS for ${o}`)));
						});
				})
			);
		}
		return r
			.then(() => e())
			.catch((_) => {
				const t = new Event('vite:preloadError', { cancelable: !0 });
				if (((t.payload = _), window.dispatchEvent(t), !t.defaultPrevented)) throw _;
			});
	},
	oe = {};
function $(a) {
	let e, n, i;
	var r = a[1][0];
	function _(t, s) {
		return { props: { data: t[3], form: t[2] } };
	}
	return (
		r && ((e = y(r, _(a))), a[12](e)),
		{
			c() {
				e && P(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && R(e, t, s), E(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][0])) {
					if (e) {
						A();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							O();
					}
					r
						? ((e = y(r, _(t))),
							t[12](e),
							P(e.$$.fragment),
							b(e.$$.fragment, 1),
							R(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const o = {};
					s & 8 && (o.data = t[3]), s & 4 && (o.form = t[2]), e.$set(o);
				}
			},
			i(t) {
				i || (e && b(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && w(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && g(n), a[12](null), e && L(e, t);
			}
		}
	);
}
function x(a) {
	let e, n, i;
	var r = a[1][0];
	function _(t, s) {
		return { props: { data: t[3], $$slots: { default: [ee] }, $$scope: { ctx: t } } };
	}
	return (
		r && ((e = y(r, _(a))), a[11](e)),
		{
			c() {
				e && P(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && R(e, t, s), E(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][0])) {
					if (e) {
						A();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							O();
					}
					r
						? ((e = y(r, _(t))),
							t[11](e),
							P(e.$$.fragment),
							b(e.$$.fragment, 1),
							R(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const o = {};
					s & 8 && (o.data = t[3]), s & 8215 && (o.$$scope = { dirty: s, ctx: t }), e.$set(o);
				}
			},
			i(t) {
				i || (e && b(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && w(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && g(n), a[11](null), e && L(e, t);
			}
		}
	);
}
function ee(a) {
	let e, n, i;
	var r = a[1][1];
	function _(t, s) {
		return { props: { data: t[4], form: t[2] } };
	}
	return (
		r && ((e = y(r, _(a))), a[10](e)),
		{
			c() {
				e && P(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && R(e, t, s), E(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][1])) {
					if (e) {
						A();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							O();
					}
					r
						? ((e = y(r, _(t))),
							t[10](e),
							P(e.$$.fragment),
							b(e.$$.fragment, 1),
							R(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const o = {};
					s & 16 && (o.data = t[4]), s & 4 && (o.form = t[2]), e.$set(o);
				}
			},
			i(t) {
				i || (e && b(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && w(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && g(n), a[10](null), e && L(e, t);
			}
		}
	);
}
function V(a) {
	let e,
		n = a[6] && C(a);
	return {
		c() {
			(e = W('div')), n && n.c(), this.h();
		},
		l(i) {
			e = F(i, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var r = G(e);
			n && n.l(r), r.forEach(g), this.h();
		},
		h() {
			T(e, 'id', 'svelte-announcer'),
				T(e, 'aria-live', 'assertive'),
				T(e, 'aria-atomic', 'true'),
				d(e, 'position', 'absolute'),
				d(e, 'left', '0'),
				d(e, 'top', '0'),
				d(e, 'clip', 'rect(0 0 0 0)'),
				d(e, 'clip-path', 'inset(50%)'),
				d(e, 'overflow', 'hidden'),
				d(e, 'white-space', 'nowrap'),
				d(e, 'width', '1px'),
				d(e, 'height', '1px');
		},
		m(i, r) {
			E(i, e, r), n && n.m(e, null);
		},
		p(i, r) {
			i[6] ? (n ? n.p(i, r) : ((n = C(i)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null));
		},
		d(i) {
			i && g(e), n && n.d();
		}
	};
}
function C(a) {
	let e;
	return {
		c() {
			e = H(a[7]);
		},
		l(n) {
			e = J(n, a[7]);
		},
		m(n, i) {
			E(n, e, i);
		},
		p(n, i) {
			i & 128 && K(e, n[7]);
		},
		d(n) {
			n && g(e);
		}
	};
}
function te(a) {
	let e, n, i, r, _;
	const t = [x, $],
		s = [];
	function o(l, m) {
		return l[1][1] ? 0 : 1;
	}
	(e = o(a)), (n = s[e] = t[e](a));
	let f = a[5] && V(a);
	return {
		c() {
			n.c(), (i = B()), f && f.c(), (r = h());
		},
		l(l) {
			n.l(l), (i = U(l)), f && f.l(l), (r = h());
		},
		m(l, m) {
			s[e].m(l, m), E(l, i, m), f && f.m(l, m), E(l, r, m), (_ = !0);
		},
		p(l, [m]) {
			let u = e;
			(e = o(l)),
				e === u
					? s[e].p(l, m)
					: (A(),
						w(s[u], 1, 1, () => {
							s[u] = null;
						}),
						O(),
						(n = s[e]),
						n ? n.p(l, m) : ((n = s[e] = t[e](l)), n.c()),
						b(n, 1),
						n.m(i.parentNode, i)),
				l[5]
					? f
						? f.p(l, m)
						: ((f = V(l)), f.c(), f.m(r.parentNode, r))
					: f && (f.d(1), (f = null));
		},
		i(l) {
			_ || (b(n), (_ = !0));
		},
		o(l) {
			w(n), (_ = !1);
		},
		d(l) {
			l && (g(i), g(r)), s[e].d(l), f && f.d(l);
		}
	};
}
function ne(a, e, n) {
	let { stores: i } = e,
		{ page: r } = e,
		{ constructors: _ } = e,
		{ components: t = [] } = e,
		{ form: s } = e,
		{ data_0: o = null } = e,
		{ data_1: f = null } = e;
	j(i.page.notify);
	let l = !1,
		m = !1,
		u = null;
	z(() => {
		const c = i.page.subscribe(() => {
			l &&
				(n(6, (m = !0)),
				Q().then(() => {
					n(7, (u = document.title || 'untitled page'));
				}));
		});
		return n(5, (l = !0)), c;
	});
	function k(c) {
		D[c ? 'unshift' : 'push'](() => {
			(t[1] = c), n(0, t);
		});
	}
	function v(c) {
		D[c ? 'unshift' : 'push'](() => {
			(t[0] = c), n(0, t);
		});
	}
	function N(c) {
		D[c ? 'unshift' : 'push'](() => {
			(t[0] = c), n(0, t);
		});
	}
	return (
		(a.$$set = (c) => {
			'stores' in c && n(8, (i = c.stores)),
				'page' in c && n(9, (r = c.page)),
				'constructors' in c && n(1, (_ = c.constructors)),
				'components' in c && n(0, (t = c.components)),
				'form' in c && n(2, (s = c.form)),
				'data_0' in c && n(3, (o = c.data_0)),
				'data_1' in c && n(4, (f = c.data_1));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 768 && i.page.set(r);
		}),
		[t, _, s, o, f, l, m, u, i, r, k, v, N]
	);
}
class ae extends X {
	constructor(e) {
		super(),
			Y(this, e, ne, te, q, {
				stores: 8,
				page: 9,
				constructors: 1,
				components: 0,
				form: 2,
				data_0: 3,
				data_1: 4
			});
	}
}
const le = [
		() =>
			p(
				() => import('../nodes/0.Q_5NMd_l.js'),
				__vite__mapDeps([0, 1, 2, 3, 4, 5]),
				import.meta.url
			),
		() => p(() => import('../nodes/1.bU3q13PI.js'), __vite__mapDeps([6, 1, 2, 7]), import.meta.url),
		() => p(() => import('../nodes/2.Dv6lztwA.js'), __vite__mapDeps([8, 1, 2, 4]), import.meta.url),
		() =>
			p(() => import('../nodes/3.BbVk5je-.js'), __vite__mapDeps([9, 1, 2, 10]), import.meta.url),
		() => p(() => Promise.resolve().then(() => ie), void 0, import.meta.url),
		() =>
			p(() => import('../nodes/5.DJDe9LXw.js'), __vite__mapDeps([11, 1, 2, 10]), import.meta.url),
		() => p(() => import('../nodes/6.Cmofs6W3.js'), __vite__mapDeps([12, 1, 2]), import.meta.url),
		() =>
			p(
				() => import('../nodes/7.BEMrn9ra.js'),
				__vite__mapDeps([13, 1, 2, 10, 4, 3, 14]),
				import.meta.url
			)
	],
	fe = [0],
	ce = {
		'/': [-3],
		'/auth/login': [3],
		'/auth/logout': [4],
		'/auth/signup': [5],
		'/drinks/add': [-8],
		'/drinks/[id]': [6]
	},
	_e = {
		handleError: ({ error: a }) => {
			console.error(a);
		},
		reroute: () => {}
	},
	ie = Object.freeze(
		Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: 'Module' })
	);
export {
	ce as dictionary,
	_e as hooks,
	oe as matchers,
	le as nodes,
	ae as root,
	fe as server_loads
};
