import { c as create_ssr_component, v as validate_component } from '../../../../chunks/ssr.js';
import { R as Row, I as InputText, S as SubmitButton } from '../../../../chunks/Row.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="flex flex-wrap flex-col justify-center items-center content-between h-full"><form method="POST">${validate_component(
		Row,
		'Row'
	).$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${validate_component(InputText, 'InputText').$$render(
					$$result,
					{
						name: 'username',
						placeholder: 'username'
					},
					{},
					{}
				)}`;
			}
		}
	)} ${validate_component(Row, 'Row').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${validate_component(InputText, 'InputText').$$render(
					$$result,
					{
						type: 'password',
						name: 'password',
						placeholder: 'password'
					},
					{},
					{}
				)}`;
			}
		}
	)} ${validate_component(Row, 'Row').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${validate_component(SubmitButton, 'SubmitButton').$$render($$result, { name: 'Login' }, {}, {})}`;
			}
		}
	)}</form> <a href="/auth/signup" class="mx-auto text-center w-full p-3 underline" data-svelte-h="svelte-1ltzvo6">Signup</a></div>`;
});
export { Page as default };
