import {
	s as j,
	e as v,
	c as b,
	b as q,
	f as m,
	h as g,
	i as B,
	v as y,
	n as N,
	a as D,
	d as R,
	j as $,
	_ as H,
	y as G,
	w as Q,
	J as W,
	t as Y,
	k as Z,
	l as ee,
	g as te,
	$ as P,
	a0 as S
} from '../chunks/scheduler.Ucs9W-mc.js';
import {
	S as F,
	i as L,
	c as k,
	a as x,
	m as T,
	t as E,
	b as I,
	d as O,
	f as U
} from '../chunks/index.Ci6sy3Wu.js';
import { R as C, I as ne, S as se } from '../chunks/Row.BB-NZ5Zz.js';
import { e as V } from '../chunks/each.D6YF6ztN.js';
import { I as re } from '../chunks/Icon.sYldm0hB.js';
function ae(r) {
	let e, n, t;
	return {
		c() {
			(e = v('textarea')), this.h();
		},
		l(l) {
			(e = b(l, 'TEXTAREA', { class: !0, name: !0, placeholder: !0 })), q(e).forEach(m), this.h();
		},
		h() {
			g(
				e,
				'class',
				'resize-none rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none overflow-y-hidden w-full'
			),
				g(e, 'name', r[1]),
				g(e, 'placeholder', r[2]),
				(e.value = r[0]);
		},
		m(l, c) {
			B(l, e, c), n || ((t = y(e, 'change', r[3])), (n = !0));
		},
		p(l, [c]) {
			c & 2 && g(e, 'name', l[1]), c & 4 && g(e, 'placeholder', l[2]), c & 1 && (e.value = l[0]);
		},
		i: N,
		o: N,
		d(l) {
			l && m(e), (n = !1), t();
		}
	};
}
function le(r, e, n) {
	let { name: t } = e,
		{ placeholder: l = '' } = e,
		{ value: c = '' } = e;
	const a = (s) => {
		const o = s.target;
		n(0, (c = o.value));
	};
	return (
		(r.$$set = (s) => {
			'name' in s && n(1, (t = s.name)),
				'placeholder' in s && n(2, (l = s.placeholder)),
				'value' in s && n(0, (c = s.value));
		}),
		[c, t, l, a]
	);
}
class oe extends F {
	constructor(e) {
		super(), L(this, e, le, ae, j, { name: 1, placeholder: 2, value: 0 });
	}
}
function z(r, e, n) {
	const t = r.slice();
	return (t[9] = e[n]), (t[11] = n), t;
}
function J(r) {
	let e,
		n = r[9] + '',
		t,
		l,
		c;
	function a() {
		return r[6](r[11]);
	}
	return {
		c() {
			(e = v('button')), (t = Y(n)), this.h();
		},
		l(s) {
			e = b(s, 'BUTTON', { type: !0, class: !0 });
			var o = q(e);
			(t = Z(o, n)), o.forEach(m), this.h();
		},
		h() {
			g(e, 'type', 'button'), g(e, 'class', 'chip svelte-eor3qk');
		},
		m(s, o) {
			B(s, e, o), $(e, t), l || ((c = y(e, 'click', a)), (l = !0));
		},
		p(s, o) {
			(r = s), o & 1 && n !== (n = r[9] + '') && ee(t, n);
		},
		d(s) {
			s && m(e), (l = !1), c();
		}
	};
}
function ie(r) {
	let e,
		n,
		t,
		l,
		c,
		a = V(r[0]),
		s = [];
	for (let o = 0; o < a.length; o += 1) s[o] = J(z(r, a, o));
	return {
		c() {
			e = v('div');
			for (let o = 0; o < s.length; o += 1) s[o].c();
			(n = D()), (t = v('input')), this.h();
		},
		l(o) {
			e = b(o, 'DIV', { class: !0 });
			var u = q(e);
			for (let f = 0; f < s.length; f += 1) s[f].l(u);
			(n = R(u)),
				(t = b(u, 'INPUT', { type: !0, placeholder: !0, class: !0, name: !0 })),
				u.forEach(m),
				this.h();
		},
		h() {
			g(t, 'type', 'text'),
				g(t, 'placeholder', 'Enter a tag'),
				g(t, 'class', 'outline-none'),
				g(t, 'name', 'tags'),
				g(
					e,
					'class',
					'flex flex-wrap rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none'
				);
		},
		m(o, u) {
			B(o, e, u);
			for (let f = 0; f < s.length; f += 1) s[f] && s[f].m(e, null);
			$(e, n),
				$(e, t),
				H(t, r[1]),
				l ||
					((c = [
						y(t, 'input', r[7]),
						y(t, 'keypress', r[3]),
						y(t, 'input', r[4]),
						y(t, 'blur', r[5])
					]),
					(l = !0));
		},
		p(o, [u]) {
			if (u & 5) {
				a = V(o[0]);
				let f;
				for (f = 0; f < a.length; f += 1) {
					const i = z(o, a, f);
					s[f] ? s[f].p(i, u) : ((s[f] = J(i)), s[f].c(), s[f].m(e, n));
				}
				for (; f < s.length; f += 1) s[f].d(1);
				s.length = a.length;
			}
			u & 2 && t.value !== o[1] && H(t, o[1]);
		},
		i: N,
		o: N,
		d(o) {
			o && m(e), G(s, o), (l = !1), Q(c);
		}
	};
}
function ue(r, e, n) {
	let { selectedOptions: t = [] } = e,
		l = '';
	W();
	const c = () => {
			l.trim() !== '' && (n(0, (t = [...t, l.trim()])), n(1, (l = '')));
		},
		a = (p) => {
			n(0, (t = t.filter((d, h) => h !== p)));
		},
		s = (p) => {
			p.key === 'Enter' && c();
		},
		o = (p) => {
			n(1, (l = p.target.value));
		},
		u = () => {
			c();
		},
		f = (p) => a(p);
	function i() {
		(l = this.value), n(1, l);
	}
	return (
		(r.$$set = (p) => {
			'selectedOptions' in p && n(0, (t = p.selectedOptions));
		}),
		[t, l, a, s, o, u, f, i]
	);
}
class ce extends F {
	constructor(e) {
		super(), L(this, e, ue, ie, j, { selectedOptions: 0 });
	}
}
function K(r, e, n) {
	const t = r.slice();
	return (t[4] = e[n]), (t[6] = n), t;
}
function X(r) {
	let e, n, t, l, c, a, s;
	function o(...u) {
		return r[3](r[6], ...u);
	}
	return {
		c() {
			(e = v('tr')), (n = v('td')), (t = v('input')), (c = D()), this.h();
		},
		l(u) {
			e = b(u, 'TR', { class: !0 });
			var f = q(e);
			n = b(f, 'TD', { class: !0 });
			var i = q(n);
			(t = b(i, 'INPUT', { class: !0, type: !0 })),
				i.forEach(m),
				(c = R(f)),
				f.forEach(m),
				this.h();
		},
		h() {
			g(t, 'class', 'w-full h-full outline-none p-1 font-bold text-right'),
				g(t, 'type', 'text'),
				(t.value = l = r[4]),
				g(n, 'class', 'svelte-viqbt3'),
				g(e, 'class', 'svelte-viqbt3');
		},
		m(u, f) {
			B(u, e, f), $(e, n), $(n, t), $(e, c), a || ((s = y(t, 'change', o)), (a = !0));
		},
		p(u, f) {
			(r = u), f & 1 && l !== (l = r[4]) && t.value !== l && (t.value = l);
		},
		d(u) {
			u && m(e), (a = !1), s();
		}
	};
}
function fe(r) {
	let e,
		n,
		t,
		l = '<th class="font-bold text-xl svelte-viqbt3">Ingredients</th>',
		c,
		a,
		s,
		o,
		u,
		f,
		i,
		p = V(r[0]),
		d = [];
	for (let h = 0; h < p.length; h += 1) d[h] = X(K(r, p, h));
	return (
		(o = new re({ props: { icon: 'heroicons:plus', class: 'h-6 w-6 bg-inherit' } })),
		{
			c() {
				(e = v('div')), (n = v('table')), (t = v('tr')), (t.innerHTML = l), (c = D());
				for (let h = 0; h < d.length; h += 1) d[h].c();
				(a = D()), (s = v('button')), k(o.$$.fragment), this.h();
			},
			l(h) {
				e = b(h, 'DIV', { class: !0 });
				var w = q(e);
				n = b(w, 'TABLE', { class: !0 });
				var _ = q(n);
				(t = b(_, 'TR', { class: !0, 'data-svelte-h': !0 })),
					te(t) !== 'svelte-dlfbrw' && (t.innerHTML = l),
					(c = R(_));
				for (let M = 0; M < d.length; M += 1) d[M].l(_);
				_.forEach(m), (a = R(w)), (s = b(w, 'BUTTON', { class: !0 }));
				var A = q(s);
				x(o.$$.fragment, A), A.forEach(m), w.forEach(m), this.h();
			},
			h() {
				g(t, 'class', 'svelte-viqbt3'),
					g(n, 'class', 'w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] svelte-viqbt3'),
					g(
						s,
						'class',
						'relative flex justify-center rounded border-black border-2 text-center bg-[#FFDB58] scale-125 -translate-y-1 -translate-x-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-none'
					),
					g(e, 'class', 'w-full');
			},
			m(h, w) {
				B(h, e, w), $(e, n), $(n, t), $(n, c);
				for (let _ = 0; _ < d.length; _ += 1) d[_] && d[_].m(n, null);
				$(e, a), $(e, s), T(o, s, null), (u = !0), f || ((i = y(s, 'click', r[1])), (f = !0));
			},
			p(h, [w]) {
				if (w & 5) {
					p = V(h[0]);
					let _;
					for (_ = 0; _ < p.length; _ += 1) {
						const A = K(h, p, _);
						d[_] ? d[_].p(A, w) : ((d[_] = X(A)), d[_].c(), d[_].m(n, null));
					}
					for (; _ < d.length; _ += 1) d[_].d(1);
					d.length = p.length;
				}
			},
			i(h) {
				u || (E(o.$$.fragment, h), (u = !0));
			},
			o(h) {
				I(o.$$.fragment, h), (u = !1);
			},
			d(h) {
				h && m(e), G(d, h), O(o), (f = !1), i();
			}
		}
	);
}
function pe(r, e, n) {
	let { rows: t = [] } = e;
	const l = () => n(0, (t = [...t, ''])),
		c = (s, o) => {
			s.target.value && n(0, (t[o] = s.target.value), t);
		},
		a = (s, o) => c(o, s);
	return (
		(r.$$set = (s) => {
			'rows' in s && n(0, (t = s.rows));
		}),
		[t, l, c, a]
	);
}
class de extends F {
	constructor(e) {
		super(), L(this, e, pe, fe, j, { rows: 0 });
	}
}
function he(r) {
	let e, n, t, l, c, a;
	function s(i) {
		r[2](i);
	}
	let o = { placeholder: 'Name', name: 'name' };
	r[0].name !== void 0 && (o.value = r[0].name),
		(e = new ne({ props: o })),
		P.push(() => U(e, 'value', s));
	function u(i) {
		r[3](i);
	}
	let f = {};
	return (
		r[0].tags !== void 0 && (f.selectedOptions = r[0].tags),
		(l = new ce({ props: f })),
		P.push(() => U(l, 'selectedOptions', u)),
		{
			c() {
				k(e.$$.fragment), (t = D()), k(l.$$.fragment);
			},
			l(i) {
				x(e.$$.fragment, i), (t = R(i)), x(l.$$.fragment, i);
			},
			m(i, p) {
				T(e, i, p), B(i, t, p), T(l, i, p), (a = !0);
			},
			p(i, p) {
				const d = {};
				!n && p & 1 && ((n = !0), (d.value = i[0].name), S(() => (n = !1))), e.$set(d);
				const h = {};
				!c && p & 1 && ((c = !0), (h.selectedOptions = i[0].tags), S(() => (c = !1))), l.$set(h);
			},
			i(i) {
				a || (E(e.$$.fragment, i), E(l.$$.fragment, i), (a = !0));
			},
			o(i) {
				I(e.$$.fragment, i), I(l.$$.fragment, i), (a = !1);
			},
			d(i) {
				i && m(t), O(e, i), O(l, i);
			}
		}
	);
}
function _e(r) {
	let e, n, t;
	function l(a) {
		r[4](a);
	}
	let c = { name: 'directions', placeholder: 'Directions' };
	return (
		r[0].directions !== void 0 && (c.value = r[0].directions),
		(e = new oe({ props: c })),
		P.push(() => U(e, 'value', l)),
		{
			c() {
				k(e.$$.fragment);
			},
			l(a) {
				x(e.$$.fragment, a);
			},
			m(a, s) {
				T(e, a, s), (t = !0);
			},
			p(a, s) {
				const o = {};
				!n && s & 1 && ((n = !0), (o.value = a[0].directions), S(() => (n = !1))), e.$set(o);
			},
			i(a) {
				t || (E(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				I(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				O(e, a);
			}
		}
	);
}
function ge(r) {
	let e, n, t;
	function l(a) {
		r[5](a);
	}
	let c = {};
	return (
		r[0].ingredients !== void 0 && (c.rows = r[0].ingredients),
		(e = new de({ props: c })),
		P.push(() => U(e, 'rows', l)),
		{
			c() {
				k(e.$$.fragment);
			},
			l(a) {
				x(e.$$.fragment, a);
			},
			m(a, s) {
				T(e, a, s), (t = !0);
			},
			p(a, s) {
				const o = {};
				!n && s & 1 && ((n = !0), (o.rows = a[0].ingredients), S(() => (n = !1))), e.$set(o);
			},
			i(a) {
				t || (E(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				I(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				O(e, a);
			}
		}
	);
}
function me(r) {
	let e, n;
	return (
		(e = new se({ props: { name: 'Add' } })),
		e.$on('click', r[1]),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, l) {
				T(e, t, l), (n = !0);
			},
			p: N,
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				O(e, t);
			}
		}
	);
}
function $e(r) {
	let e, n, t, l, c, a, s, o, u, f;
	return (
		(t = new C({ props: { $$slots: { default: [he] }, $$scope: { ctx: r } } })),
		(c = new C({ props: { $$slots: { default: [_e] }, $$scope: { ctx: r } } })),
		(s = new C({ props: { $$slots: { default: [ge] }, $$scope: { ctx: r } } })),
		(u = new C({ props: { $$slots: { default: [me] }, $$scope: { ctx: r } } })),
		{
			c() {
				(e = v('form')),
					(n = v('div')),
					k(t.$$.fragment),
					(l = D()),
					k(c.$$.fragment),
					(a = D()),
					k(s.$$.fragment),
					(o = D()),
					k(u.$$.fragment),
					this.h();
			},
			l(i) {
				e = b(i, 'FORM', { class: !0 });
				var p = q(e);
				n = b(p, 'DIV', {});
				var d = q(n);
				x(t.$$.fragment, d),
					(l = R(d)),
					x(c.$$.fragment, d),
					(a = R(d)),
					x(s.$$.fragment, d),
					(o = R(d)),
					x(u.$$.fragment, d),
					d.forEach(m),
					p.forEach(m),
					this.h();
			},
			h() {
				g(e, 'class', 'flex justify-center content-center');
			},
			m(i, p) {
				B(i, e, p),
					$(e, n),
					T(t, n, null),
					$(n, l),
					T(c, n, null),
					$(n, a),
					T(s, n, null),
					$(n, o),
					T(u, n, null),
					(f = !0);
			},
			p(i, [p]) {
				const d = {};
				p & 65 && (d.$$scope = { dirty: p, ctx: i }), t.$set(d);
				const h = {};
				p & 65 && (h.$$scope = { dirty: p, ctx: i }), c.$set(h);
				const w = {};
				p & 65 && (w.$$scope = { dirty: p, ctx: i }), s.$set(w);
				const _ = {};
				p & 64 && (_.$$scope = { dirty: p, ctx: i }), u.$set(_);
			},
			i(i) {
				f ||
					(E(t.$$.fragment, i),
					E(c.$$.fragment, i),
					E(s.$$.fragment, i),
					E(u.$$.fragment, i),
					(f = !0));
			},
			o(i) {
				I(t.$$.fragment, i),
					I(c.$$.fragment, i),
					I(s.$$.fragment, i),
					I(u.$$.fragment, i),
					(f = !1);
			},
			d(i) {
				i && m(e), O(t), O(c), O(s), O(u);
			}
		}
	);
}
function ve(r, e, n) {
	const t = { name: '', ingredients: [''], tags: [], directions: '' },
		l = () => {
			console.log(t);
		};
	function c(u) {
		r.$$.not_equal(t.name, u) && ((t.name = u), n(0, t));
	}
	function a(u) {
		r.$$.not_equal(t.tags, u) && ((t.tags = u), n(0, t));
	}
	function s(u) {
		r.$$.not_equal(t.directions, u) && ((t.directions = u), n(0, t));
	}
	function o(u) {
		r.$$.not_equal(t.ingredients, u) && ((t.ingredients = u), n(0, t));
	}
	return [t, l, c, a, s, o];
}
class Ee extends F {
	constructor(e) {
		super(), L(this, e, ve, $e, j, {});
	}
}
export { Ee as component };
