import {
	s as A,
	e as b,
	a as S,
	c as C,
	b as q,
	d as I,
	f as R,
	g as B,
	h as w,
	i as D,
	j as _,
	n as E
} from '../chunks/scheduler.Ucs9W-mc.js';
import {
	S as F,
	i as L,
	c as u,
	a as c,
	m as p,
	t as i,
	b as g,
	d
} from '../chunks/index.Ci6sy3Wu.js';
import { R as j, I as z, S as M } from '../chunks/Row.BB-NZ5Zz.js';
function V(m) {
	let t, n;
	return (
		(t = new z({ props: { name: 'username', placeholder: 'username' } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				c(t.$$.fragment, e);
			},
			m(e, s) {
				p(t, e, s), (n = !0);
			},
			p: E,
			i(e) {
				n || (i(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				d(t, e);
			}
		}
	);
}
function k(m) {
	let t, n;
	return (
		(t = new z({ props: { type: 'password', name: 'password', placeholder: 'password' } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				c(t.$$.fragment, e);
			},
			m(e, s) {
				p(t, e, s), (n = !0);
			},
			p: E,
			i(e) {
				n || (i(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				d(t, e);
			}
		}
	);
}
function y(m) {
	let t, n;
	return (
		(t = new M({ props: { name: 'Login' } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				c(t.$$.fragment, e);
			},
			m(e, s) {
				p(t, e, s), (n = !0);
			},
			p: E,
			i(e) {
				n || (i(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				d(t, e);
			}
		}
	);
}
function G(m) {
	let t,
		n,
		e,
		s,
		$,
		x,
		l,
		v,
		f,
		O = 'Signup',
		h;
	return (
		(e = new j({ props: { $$slots: { default: [V] }, $$scope: { ctx: m } } })),
		($ = new j({ props: { $$slots: { default: [k] }, $$scope: { ctx: m } } })),
		(l = new j({ props: { $$slots: { default: [y] }, $$scope: { ctx: m } } })),
		{
			c() {
				(t = b('div')),
					(n = b('form')),
					u(e.$$.fragment),
					(s = S()),
					u($.$$.fragment),
					(x = S()),
					u(l.$$.fragment),
					(v = S()),
					(f = b('a')),
					(f.textContent = O),
					this.h();
			},
			l(r) {
				t = C(r, 'DIV', { class: !0 });
				var a = q(t);
				n = C(a, 'FORM', { method: !0 });
				var o = q(n);
				c(e.$$.fragment, o),
					(s = I(o)),
					c($.$$.fragment, o),
					(x = I(o)),
					c(l.$$.fragment, o),
					o.forEach(R),
					(v = I(a)),
					(f = C(a, 'A', { href: !0, class: !0, 'data-svelte-h': !0 })),
					B(f) !== 'svelte-1ltzvo6' && (f.textContent = O),
					a.forEach(R),
					this.h();
			},
			h() {
				w(n, 'method', 'POST'),
					w(f, 'href', '/auth/signup'),
					w(f, 'class', 'mx-auto text-center w-full p-3 underline'),
					w(
						t,
						'class',
						'flex flex-wrap flex-col justify-center items-center content-between h-full'
					);
			},
			m(r, a) {
				D(r, t, a),
					_(t, n),
					p(e, n, null),
					_(n, s),
					p($, n, null),
					_(n, x),
					p(l, n, null),
					_(t, v),
					_(t, f),
					(h = !0);
			},
			p(r, [a]) {
				const o = {};
				a & 1 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
				const P = {};
				a & 1 && (P.$$scope = { dirty: a, ctx: r }), $.$set(P);
				const T = {};
				a & 1 && (T.$$scope = { dirty: a, ctx: r }), l.$set(T);
			},
			i(r) {
				h || (i(e.$$.fragment, r), i($.$$.fragment, r), i(l.$$.fragment, r), (h = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g($.$$.fragment, r), g(l.$$.fragment, r), (h = !1);
			},
			d(r) {
				r && R(t), d(e), d($), d(l);
			}
		}
	);
}
class N extends F {
	constructor(t) {
		super(), L(this, t, null, G, A, {});
	}
}
export { N as component };
