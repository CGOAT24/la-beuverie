var B = Object.defineProperty;
var q = (t, n, e) =>
	n in t ? B(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[n] = e);
var f = (t, n, e) => (q(t, typeof n != 'symbol' ? n + '' : n, e), e);
function G() {}
function I(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function lt(t) {
	return !!t && (typeof t == 'object' || typeof t == 'function') && typeof t.then == 'function';
}
function z(t) {
	return t();
}
function ct() {
	return Object.create(null);
}
function F(t) {
	t.forEach(z);
}
function st(t) {
	return typeof t == 'function';
}
function rt(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
function ot(t) {
	return Object.keys(t).length === 0;
}
function R(t, ...n) {
	if (t == null) {
		for (const i of n) i(void 0);
		return G;
	}
	const e = t.subscribe(...n);
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
function at(t, n, e) {
	t.$$.on_destroy.push(R(n, e));
}
function ut(t, n, e, i) {
	if (t) {
		const l = j(t, n, e, i);
		return t[0](l);
	}
}
function j(t, n, e, i) {
	return t[1] && i ? I(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function ft(t, n, e, i) {
	if (t[2] && i) {
		const l = t[2](i(e));
		if (n.dirty === void 0) return l;
		if (typeof l == 'object') {
			const r = [],
				c = Math.max(n.dirty.length, l.length);
			for (let o = 0; o < c; o += 1) r[o] = n.dirty[o] | l[o];
			return r;
		}
		return n.dirty | l;
	}
	return n.dirty;
}
function _t(t, n, e, i, l, r) {
	if (l) {
		const c = j(n, e, i, r);
		t.p(c, l);
	}
}
function ht(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
function dt(t) {
	const n = {};
	for (const e in t) e[0] !== '$' && (n[e] = t[e]);
	return n;
}
let p = !1;
function mt() {
	p = !0;
}
function pt() {
	p = !1;
}
function U(t, n, e, i) {
	for (; t < n; ) {
		const l = t + ((n - t) >> 1);
		e(l) <= i ? (t = l + 1) : (n = l);
	}
	return t;
}
function W(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const s = [];
		for (let a = 0; a < n.length; a++) {
			const u = n[a];
			u.claim_order !== void 0 && s.push(u);
		}
		n = s;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let l = 0;
	for (let s = 0; s < n.length; s++) {
		const a = n[s].claim_order,
			u = (l > 0 && n[e[l]].claim_order <= a ? l + 1 : U(1, l, (D) => n[e[D]].claim_order, a)) - 1;
		i[s] = e[u] + 1;
		const N = u + 1;
		(e[N] = s), (l = Math.max(N, l));
	}
	const r = [],
		c = [];
	let o = n.length - 1;
	for (let s = e[l] + 1; s != 0; s = i[s - 1]) {
		for (r.push(n[s - 1]); o >= s; o--) c.push(n[o]);
		o--;
	}
	for (; o >= 0; o--) c.push(n[o]);
	r.reverse(), c.sort((s, a) => s.claim_order - a.claim_order);
	for (let s = 0, a = 0; s < c.length; s++) {
		for (; a < r.length && c[s].claim_order >= r[a].claim_order; ) a++;
		const u = a < r.length ? r[a] : null;
		t.insertBefore(c[s], u);
	}
}
function J(t, n) {
	if (p) {
		for (
			W(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function K(t, n, e) {
	t.insertBefore(n, e || null);
}
function Q(t, n, e) {
	p && !e ? J(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function E(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function yt(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function M(t) {
	return document.createElement(t);
}
function H(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function T(t) {
	return document.createTextNode(t);
}
function bt() {
	return T(' ');
}
function gt() {
	return T('');
}
function xt(t, n, e, i) {
	return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function L(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
const V = ['width', 'height'];
function Et(t, n) {
	const e = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in n)
		n[i] == null
			? t.removeAttribute(i)
			: i === 'style'
				? (t.style.cssText = n[i])
				: i === '__value'
					? (t.value = t[i] = n[i])
					: e[i] && e[i].set && V.indexOf(i) === -1
						? (t[i] = n[i])
						: L(t, i, n[i]);
}
function vt(t, n) {
	for (const e in n) L(t, e, n[e]);
}
function wt(t) {
	return t.dataset.svelteH;
}
function Tt(t) {
	return Array.from(t.childNodes);
}
function P(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function S(t, n, e, i, l = !1) {
	P(t);
	const r = (() => {
		for (let c = t.claim_info.last_index; c < t.length; c++) {
			const o = t[c];
			if (n(o)) {
				const s = e(o);
				return s === void 0 ? t.splice(c, 1) : (t[c] = s), l || (t.claim_info.last_index = c), o;
			}
		}
		for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
			const o = t[c];
			if (n(o)) {
				const s = e(o);
				return (
					s === void 0 ? t.splice(c, 1) : (t[c] = s),
					l ? s === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = c),
					o
				);
			}
		}
		return i();
	})();
	return (r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), r;
}
function O(t, n, e, i) {
	return S(
		t,
		(l) => l.nodeName === n,
		(l) => {
			const r = [];
			for (let c = 0; c < l.attributes.length; c++) {
				const o = l.attributes[c];
				e[o.name] || r.push(o.name);
			}
			r.forEach((c) => l.removeAttribute(c));
		},
		() => i(n)
	);
}
function Nt(t, n, e) {
	return O(t, n, e, M);
}
function kt(t, n, e) {
	return O(t, n, e, H);
}
function X(t, n) {
	return S(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = '' + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => T(n),
		!0
	);
}
function At(t) {
	return X(t, ' ');
}
function k(t, n, e) {
	for (let i = e; i < t.length; i += 1) {
		const l = t[i];
		if (l.nodeType === 8 && l.textContent.trim() === n) return i;
	}
	return -1;
}
function jt(t, n) {
	const e = k(t, 'HTML_TAG_START', 0),
		i = k(t, 'HTML_TAG_END', e + 1);
	if (e === -1 || i === -1) return new b(n);
	P(t);
	const l = t.splice(e, i - e + 1);
	E(l[0]), E(l[l.length - 1]);
	const r = l.slice(1, l.length - 1);
	if (r.length === 0) return new b(n);
	for (const c of r)
		(c.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new b(n, r);
}
function Mt(t, n) {
	(n = '' + n), t.data !== n && (t.data = n);
}
function Ht(t, n) {
	t.value = n ?? '';
}
function Lt(t, n, e, i) {
	e == null ? t.style.removeProperty(n) : t.style.setProperty(n, e, '');
}
function Y(t, n, { bubbles: e = !1, cancelable: i = !1 } = {}) {
	return new CustomEvent(t, { detail: n, bubbles: e, cancelable: i });
}
class Z {
	constructor(n = !1) {
		f(this, 'is_svg', !1);
		f(this, 'e');
		f(this, 'n');
		f(this, 't');
		f(this, 'a');
		(this.is_svg = n), (this.e = this.n = null);
	}
	c(n) {
		this.h(n);
	}
	m(n, e, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = H(e.nodeName))
				: (this.e = M(e.nodeType === 11 ? 'TEMPLATE' : e.nodeName)),
			(this.t = e.tagName !== 'TEMPLATE' ? e : e.content),
			this.c(n)),
			this.i(i);
	}
	h(n) {
		(this.e.innerHTML = n),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			));
	}
	i(n) {
		for (let e = 0; e < this.n.length; e += 1) K(this.t, this.n[e], n);
	}
	p(n) {
		this.d(), this.h(n), this.i(this.a);
	}
	d() {
		this.n.forEach(E);
	}
}
class b extends Z {
	constructor(e = !1, i) {
		super(e);
		f(this, 'l');
		(this.e = this.n = null), (this.l = i);
	}
	c(e) {
		this.l ? (this.n = this.l) : super.c(e);
	}
	i(e) {
		for (let i = 0; i < this.n.length; i += 1) Q(this.t, this.n[i], e);
	}
}
function Pt(t, n) {
	return new t(n);
}
let m;
function g(t) {
	m = t;
}
function y() {
	if (!m) throw new Error('Function called outside component initialization');
	return m;
}
function St(t) {
	y().$$.on_mount.push(t);
}
function Ot(t) {
	y().$$.after_update.push(t);
}
function Ct(t) {
	y().$$.on_destroy.push(t);
}
function Dt() {
	const t = y();
	return (n, e, { cancelable: i = !1 } = {}) => {
		const l = t.$$.callbacks[n];
		if (l) {
			const r = Y(n, e, { cancelable: i });
			return (
				l.slice().forEach((c) => {
					c.call(t, r);
				}),
				!r.defaultPrevented
			);
		}
		return !0;
	};
}
function Bt(t, n) {
	const e = t.$$.callbacks[n.type];
	e && e.slice().forEach((i) => i.call(this, n));
}
const d = [],
	A = [];
let h = [];
const v = [],
	C = Promise.resolve();
let w = !1;
function $() {
	w || ((w = !0), C.then(nt));
}
function qt() {
	return $(), C;
}
function tt(t) {
	h.push(t);
}
function Gt(t) {
	v.push(t);
}
const x = new Set();
let _ = 0;
function nt() {
	if (_ !== 0) return;
	const t = m;
	do {
		try {
			for (; _ < d.length; ) {
				const n = d[_];
				_++, g(n), et(n.$$);
			}
		} catch (n) {
			throw ((d.length = 0), (_ = 0), n);
		}
		for (g(null), d.length = 0, _ = 0; A.length; ) A.pop()();
		for (let n = 0; n < h.length; n += 1) {
			const e = h[n];
			x.has(e) || (x.add(e), e());
		}
		h.length = 0;
	} while (d.length);
	for (; v.length; ) v.pop()();
	(w = !1), x.clear(), g(t);
}
function et(t) {
	if (t.fragment !== null) {
		t.update(), F(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(tt);
	}
}
function It(t) {
	const n = [],
		e = [];
	h.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))), e.forEach((i) => i()), (h = n);
}
export {
	A as $,
	Ct as A,
	I as B,
	dt as C,
	Et as D,
	H as E,
	kt as F,
	jt as G,
	b as H,
	vt as I,
	Dt as J,
	Bt as K,
	ut as L,
	_t as M,
	ht as N,
	ft as O,
	ct as P,
	st as Q,
	ot as R,
	tt as S,
	It as T,
	m as U,
	z as V,
	d as W,
	$ as X,
	mt as Y,
	pt as Z,
	Ht as _,
	bt as a,
	Gt as a0,
	qt as a1,
	Ot as a2,
	Pt as a3,
	Tt as b,
	Nt as c,
	At as d,
	M as e,
	E as f,
	wt as g,
	L as h,
	Q as i,
	J as j,
	X as k,
	Mt as l,
	at as m,
	G as n,
	lt as o,
	y as p,
	g as q,
	nt as r,
	rt as s,
	T as t,
	Lt as u,
	xt as v,
	F as w,
	gt as x,
	yt as y,
	St as z
};
