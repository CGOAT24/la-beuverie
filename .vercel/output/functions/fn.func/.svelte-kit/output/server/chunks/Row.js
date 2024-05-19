import { c as create_ssr_component, f as add_attribute, e as escape } from './ssr.js';
const InputText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { name } = $$props;
	let { placeholder = '' } = $$props;
	let { value = '' } = $$props;
	let { type = 'text' } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
		$$bindings.placeholder(placeholder);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	return `<input class="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none"${add_attribute('type', type, 0)}${add_attribute('name', name, 0)}${add_attribute('placeholder', placeholder, 0)}${add_attribute('aria-label', placeholder, 0)}${add_attribute('value', value, 0)}>`;
});
const SubmitButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { name } = $$props;
	let { color = '#A388EE' } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	return `<input type="submit"${add_attribute('value', name, 0)} class="flex cursor-pointer items-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none w-full" style="${'background-color: ' + escape(color, true) + ';'}">`;
});
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="w-full flex my-5 justify-between">${slots.default ? slots.default({}) : ``}</div>`;
});
export { InputText as I, Row as R, SubmitButton as S };
