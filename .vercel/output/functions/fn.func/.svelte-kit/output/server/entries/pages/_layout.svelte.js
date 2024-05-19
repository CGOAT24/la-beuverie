import {
	c as create_ssr_component,
	e as escape,
	v as validate_component,
	b as each
} from '../../chunks/ssr.js';
import { I as Icon } from '../../chunks/Icon.js';
const css = {
	code: 'button.svelte-6bpsuv{height:100%}',
	map: '{"version":3,"file":"NavbarButton.svelte","sources":["NavbarButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Icon from \\"@iconify/svelte\\";\\nexport let icon;\\nexport let color;\\nexport let className = \\"\\";\\n</script>\\n\\n<button\\n\\tclass=\\"{className} border-2 border-[#12110F] rounded-xl p-3 mx-1\\"\\n\\tstyle=\\"background-color: {color}\\"\\n\\ton:click\\n>\\n\\t<Icon {icon} class=\\"h-6 w-6 bg-inherit\\" />\\n\\t<slot />\\n</button>\\n\\n<style>\\n\\tbutton {\\n\\t\\theight: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgBC,oBAAO,CACN,MAAM,CAAE,IACT"}'
};
const NavbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { icon } = $$props;
	let { color } = $$props;
	let { className = '' } = $$props;
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.className === void 0 && $$bindings.className && className !== void 0)
		$$bindings.className(className);
	$$result.css.add(css);
	return `<button class="${escape(className, true) + ' border-2 border-[#12110F] rounded-xl p-3 mx-1 svelte-6bpsuv'}" style="${'background-color: ' + escape(color, true)}">${validate_component(Icon, 'Icon').$$render($$result, { icon, class: 'h-6 w-6 bg-inherit' }, {}, {})} ${slots.default ? slots.default({}) : ``} </button>`;
});
const count = 2;
const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const data = Array(count).fill('La Beuverie');
	return `<div class="relative flex w-full overflow-x-hidden font-bold max-w-80"><div class="animate-marquee whitespace-nowrap">${each(
		data,
		(elem) => {
			return `<span class="mx-4 text-4xl title my-auto">${escape(elem)} </span>`;
		}
	)}</div> <div class="absolute top-0 animate-marquee2 whitespace-nowrap">${each(data, (elem) => {
		return `<span class="mx-4 text-4xl title my-auto">${escape(elem)} </span>`;
	})}</div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	const { isAuthenticated } = data;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `<div class="w-100 py-4 rounded-2xl border-4 mx-3 mt-1 mb-5 border-black shadow-[5px_5px_#000000] flex justify-between"><a href="/"><div class="flex flex-wrap justify-start font-bold ml-3 content-center h-full">${validate_component(Marquee, 'Marquee').$$render($$result, {}, {}, {})}</div></a> <div class="flex flex-wrap justify-end mr-3"><a href="https://github.com/cgoat24/la-beuverie">${validate_component(
		NavbarButton,
		'NavbarButton'
	).$$render(
		$$result,
		{
			color: '#FFFFFF',
			icon: 'simple-icons:github'
		},
		{},
		{}
	)}</a> ${validate_component(NavbarButton, 'NavbarButton').$$render(
		$$result,
		{
			className: 'flex justify-between items-center',
			color: '#FF7A5C',
			icon: 'heroicons:magnifying-glass'
		},
		{},
		{
			default: () => {
				return `${``}`;
			}
		}
	)} ${validate_component(NavbarButton, 'NavbarButton').$$render(
		$$result,
		{
			color: '#90EE90',
			icon: 'heroicons:funnel'
		},
		{},
		{}
	)} <a href="/drinks/add">${validate_component(NavbarButton, 'NavbarButton').$$render($$result, { color: '#F4D738', icon: 'heroicons:plus' }, {}, {})}</a> ${
		isAuthenticated
			? `<form method="POST" action="/auth/logout">${validate_component(
					NavbarButton,
					'NavbarButton'
				).$$render(
					$$result,
					{
						color: '#87CEEB',
						icon: 'heroicons:arrow-left-start-on-rectangle'
					},
					{},
					{}
				)}</form>`
			: `<a href="/auth/login">${validate_component(NavbarButton, 'NavbarButton').$$render(
					$$result,
					{
						color: '#87CEEB',
						icon: 'heroicons:arrow-left-end-on-rectangle'
					},
					{},
					{}
				)}</a>`
	}</div></div> <div class="m-5 flex justify-center">${slots.default ? slots.default({}) : ``}</div>`;
});
export { Layout as default };
