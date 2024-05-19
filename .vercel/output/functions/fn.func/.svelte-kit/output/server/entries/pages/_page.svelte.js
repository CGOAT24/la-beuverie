import {
	c as create_ssr_component,
	e as escape,
	i as is_promise,
	n as noop,
	b as each,
	v as validate_component
} from '../../chunks/ssr.js';
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { name } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	return `<button class="hover:scale-110 transition ease-in-out p-4 m-3 rounded-2xl border-4 border-[#12110F] shadow-[5px_5px_0_1px_#12110F] font-bold uppercase" style="${'background-color: ' + escape('inherit', true)}">${escape(name)}</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `<div class="flex flex-wrap justify-stretch">${(function (__value) {
		if (is_promise(__value)) {
			__value.then(null, noop);
			return `
		Loading...
	`;
		}
		return (function (drinks) {
			return ` ${
				drinks.length > 0
					? `${each(drinks, (drink) => {
							return `<a href="${'/drinks/' + escape(drink.id, true)}">${validate_component(Card, 'Card').$$render($$result, { name: drink.name }, {}, {})} </a>`;
						})}`
					: `No drinks!`
			} `;
		})(__value);
	})(data.drinks)}</div>`;
});
export { Page as default };
