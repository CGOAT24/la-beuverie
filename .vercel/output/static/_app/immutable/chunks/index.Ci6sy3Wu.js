var b = Object.defineProperty;
var E = (t, e, n) =>
	e in t ? b(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var _ = (t, e, n) => (E(t, typeof e != 'symbol' ? e + '' : e, n), n);
import {
	w as $,
	n as c,
	P as x,
	b as C,
	f as I,
	r as O,
	Q as v,
	R as P,
	S as p,
	T as R,
	U,
	q as w,
	V,
	W as j,
	X as B,
	Y as L,
	Z as M
} from './scheduler.Ucs9W-mc.js';
const o = new Set();
let f;
function q() {
	f = { r: 0, c: [], p: f };
}
function z() {
	f.r || $(f.c), (f = f.p);
}
function N(t, e) {
	t && t.i && (o.delete(t), t.i(e));
}
function A(t, e, n, s) {
	if (t && t.o) {
		if (o.has(t)) return;
		o.add(t),
			f.c.push(() => {
				o.delete(t), s && (n && t.d(1), s());
			}),
			t.o(e);
	} else s && s();
}
function D(t, e, n) {
	const s = t.$$.props[e];
	s !== void 0 && ((t.$$.bound[s] = n), n(t.$$.ctx[s]));
}
function F(t) {
	t && t.c();
}
function G(t, e) {
	t && t.l(e);
}
function Q(t, e, n) {
	const { fragment: s, after_update: i } = t.$$;
	s && s.m(e, n),
		p(() => {
			const d = t.$$.on_mount.map(V).filter(v);
			t.$$.on_destroy ? t.$$.on_destroy.push(...d) : $(d), (t.$$.on_mount = []);
		}),
		i.forEach(p);
}
function T(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(R(n.after_update),
		$(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function W(t, e) {
	t.$$.dirty[0] === -1 && (j.push(t), B(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function H(t, e, n, s, i, d, h = null, S = [-1]) {
	const u = U;
	w(t);
	const r = (t.$$ = {
		fragment: null,
		ctx: [],
		props: d,
		update: c,
		not_equal: i,
		bound: x(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (u ? u.$$.context : [])),
		callbacks: x(),
		dirty: S,
		skip_bound: !1,
		root: e.target || u.$$.root
	});
	h && h(r.root);
	let l = !1;
	if (
		((r.ctx = n
			? n(t, e.props || {}, (a, g, ...m) => {
					const y = m.length ? m[0] : g;
					return (
						r.ctx &&
							i(r.ctx[a], (r.ctx[a] = y)) &&
							(!r.skip_bound && r.bound[a] && r.bound[a](y), l && W(t, a)),
						g
					);
				})
			: []),
		r.update(),
		(l = !0),
		$(r.before_update),
		(r.fragment = s ? s(r.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			L();
			const a = C(e.target);
			r.fragment && r.fragment.l(a), a.forEach(I);
		} else r.fragment && r.fragment.c();
		e.intro && N(t.$$.fragment), Q(t, e.target, e.anchor), M(), O();
	}
	w(u);
}
class J {
	constructor() {
		_(this, '$$');
		_(this, '$$set');
	}
	$destroy() {
		T(this, 1), (this.$destroy = c);
	}
	$on(e, n) {
		if (!v(n)) return c;
		const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			s.push(n),
			() => {
				const i = s.indexOf(n);
				i !== -1 && s.splice(i, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !P(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
const X = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(X);
export { J as S, G as a, A as b, F as c, T as d, z as e, D as f, q as g, H as i, Q as m, N as t };
