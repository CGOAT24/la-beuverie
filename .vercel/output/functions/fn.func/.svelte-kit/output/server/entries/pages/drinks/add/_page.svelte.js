import {
	c as create_ssr_component,
	f as add_attribute,
	e as escape,
	h as createEventDispatcher,
	b as each,
	v as validate_component
} from '../../../../chunks/ssr.js';
import { R as Row, I as InputText, S as SubmitButton } from '../../../../chunks/Row.js';
import { I as Icon } from '../../../../chunks/Icon.js';
const TextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { name } = $$props;
	let { placeholder = '' } = $$props;
	let { value = '' } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
		$$bindings.placeholder(placeholder);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	return `<textarea class="resize-none rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none overflow-y-hidden w-full"${add_attribute('name', name, 0)}${add_attribute('placeholder', placeholder, 0)}>${escape(value, false)}</textarea>`;
});
const css$1 = {
	code: '.chip.svelte-eor3qk{margin:0.5rem;padding:0.25rem 0.5rem;background-color:#007bff;color:white;border-radius:0.25rem;cursor:pointer}',
	map: '{"version":3,"file":"InputTags.svelte","sources":["InputTags.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher } from \\"svelte\\";\\nexport let selectedOptions = [];\\nlet chipInput = \\"\\";\\ncreateEventDispatcher();\\nconst addChip = () => {\\n  if (chipInput.trim() !== \\"\\") {\\n    selectedOptions = [...selectedOptions, chipInput.trim()];\\n    chipInput = \\"\\";\\n  }\\n};\\nconst removeChip = (index) => {\\n  selectedOptions = selectedOptions.filter((_, i) => i !== index);\\n};\\nconst handleKeyPress = (event) => {\\n  if (event.key === \\"Enter\\") {\\n    addChip();\\n  }\\n};\\nconst handleInput = (event) => {\\n  chipInput = event.target.value;\\n};\\nconst handleBlur = () => {\\n  addChip();\\n};\\n</script>\\n\\n<div\\n\\tclass=\\"flex flex-wrap rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none\\"\\n>\\n\\t{#each selectedOptions as chip, index}\\n\\t\\t<button type=\\"button\\" class=\\"chip\\" on:click={() => removeChip(index)}>\\n\\t\\t\\t{chip}\\n\\t\\t</button>\\n\\t{/each}\\n\\t<input\\n\\t\\ttype=\\"text\\"\\n\\t\\tbind:value={chipInput}\\n\\t\\ton:keypress={handleKeyPress}\\n\\t\\ton:input={handleInput}\\n\\t\\ton:blur={handleBlur}\\n\\t\\tplaceholder=\\"Enter a tag\\"\\n\\t\\tclass=\\"outline-none\\"\\n\\t\\tname=\\"tags\\"\\n\\t/>\\n</div>\\n\\n<style>\\n\\t.chip {\\n\\t\\tmargin: 0.5rem;\\n\\t\\tpadding: 0.25rem 0.5rem;\\n\\t\\tbackground-color: #007bff;\\n\\t\\tcolor: white;\\n\\t\\tborder-radius: 0.25rem;\\n\\t\\tcursor: pointer;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+CC,mBAAM,CACL,MAAM,CAAE,MAAM,CACd,OAAO,CAAE,OAAO,CAAC,MAAM,CACvB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,OAAO,CACtB,MAAM,CAAE,OACT"}'
};
const InputTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { selectedOptions = [] } = $$props;
	let chipInput = '';
	createEventDispatcher();
	if (
		$$props.selectedOptions === void 0 &&
		$$bindings.selectedOptions &&
		selectedOptions !== void 0
	)
		$$bindings.selectedOptions(selectedOptions);
	$$result.css.add(css$1);
	return `<div class="flex flex-wrap rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none">${each(
		selectedOptions,
		(chip, index) => {
			return `<button type="button" class="chip svelte-eor3qk">${escape(chip)} </button>`;
		}
	)} <input type="text" placeholder="Enter a tag" class="outline-none" name="tags"${add_attribute('value', chipInput, 0)}> </div>`;
});
const css = {
	code: 'table.svelte-viqbt3.svelte-viqbt3.svelte-viqbt3{border-spacing:0;border-collapse:separate;border-radius:0.25rem;border:2px solid black}table.svelte-viqbt3 th.svelte-viqbt3.svelte-viqbt3:not(:last-child),table.svelte-viqbt3 td.svelte-viqbt3.svelte-viqbt3:not(:last-child){border-right:2px solid black}table.svelte-viqbt3>tr.svelte-viqbt3:not(:last-child)>td.svelte-viqbt3,table.svelte-viqbt3>tr.svelte-viqbt3:not(:last-child)>th.svelte-viqbt3{border-bottom:2px solid black}',
	map: '{"version":3,"file":"InputIngredients.svelte","sources":["InputIngredients.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Icon from \\"@iconify/svelte\\";\\nexport let rows = [];\\nconst addRow = () => rows = [...rows, \\"\\"];\\nconst update = (event, i) => {\\n  const value = event.target.value;\\n  if (value) {\\n    rows[i] = event.target.value;\\n  }\\n};\\n</script>\\n\\n<div class=\\"w-full\\">\\n\\t<table class=\\"w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]\\">\\n\\t\\t<tr>\\n\\t\\t\\t<th class=\\"font-bold text-xl\\">Ingredients</th>\\n\\t\\t</tr>\\n\\t\\t{#each rows as row, i}\\n\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\tclass=\\"w-full h-full outline-none p-1 font-bold text-right\\"\\n\\t\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\t\\tvalue={row}\\n\\t\\t\\t\\t\\t\\ton:change={(e) => update(e, i)}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t</tr>\\n\\t\\t{/each}\\n\\t</table>\\n\\t<button\\n\\t\\tclass=\\"relative flex justify-center rounded border-black border-2 text-center bg-[#FFDB58] scale-125 -translate-y-1 -translate-x-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-none\\"\\n\\t\\ton:click={addRow}\\n\\t>\\n\\t\\t<Icon icon=\\"heroicons:plus\\" class=\\"h-6 w-6 bg-inherit\\" />\\n\\t</button>\\n</div>\\n\\n<style>\\n\\ttable {\\n\\t\\tborder-spacing: 0;\\n\\t\\tborder-collapse: separate;\\n\\t\\tborder-radius: 0.25rem;\\n\\t\\tborder: 2px solid black;\\n\\t}\\n\\n\\ttable th:not(:last-child),\\n\\ttable td:not(:last-child) {\\n\\t\\tborder-right: 2px solid black;\\n\\t}\\n\\n\\ttable > tr:not(:last-child) > td,\\n\\ttable > tr:not(:last-child) > th {\\n\\t\\tborder-bottom: 2px solid black;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAsCC,+CAAM,CACL,cAAc,CAAE,CAAC,CACjB,eAAe,CAAE,QAAQ,CACzB,aAAa,CAAE,OAAO,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACnB,CAEA,mBAAK,CAAC,8BAAE,KAAK,WAAW,CAAC,CACzB,mBAAK,CAAC,8BAAE,KAAK,WAAW,CAAE,CACzB,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,KACzB,CAEA,mBAAK,CAAG,gBAAE,KAAK,WAAW,CAAC,CAAG,gBAAE,CAChC,mBAAK,CAAG,gBAAE,KAAK,WAAW,CAAC,CAAG,gBAAG,CAChC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAC1B"}'
};
const InputIngredients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { rows = [] } = $$props;
	if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0) $$bindings.rows(rows);
	$$result.css.add(css);
	return `<div class="w-full"><table class="w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] svelte-viqbt3"><tr class="svelte-viqbt3" data-svelte-h="svelte-dlfbrw"><th class="font-bold text-xl svelte-viqbt3">Ingredients</th></tr> ${each(
		rows,
		(row, i) => {
			return `<tr class="svelte-viqbt3"><td class="svelte-viqbt3"><input class="w-full h-full outline-none p-1 font-bold text-right" type="text"${add_attribute('value', row, 0)}></td> </tr>`;
		}
	)}</table> <button class="relative flex justify-center rounded border-black border-2 text-center bg-[#FFDB58] scale-125 -translate-y-1 -translate-x-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-none">${validate_component(
		Icon,
		'Icon'
	).$$render(
		$$result,
		{
			icon: 'heroicons:plus',
			class: 'h-6 w-6 bg-inherit'
		},
		{},
		{}
	)}</button> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const input = {
		name: '',
		ingredients: [''],
		tags: [],
		directions: ''
	};
	let $$settled;
	let $$rendered;
	let previous_head = $$result.head;
	do {
		$$settled = true;
		$$result.head = previous_head;
		$$rendered = `<form class="flex justify-center content-center"><div>${validate_component(
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
							placeholder: 'Name',
							name: 'name',
							value: input.name
						},
						{
							value: ($$value) => {
								input.name = $$value;
								$$settled = false;
							}
						},
						{}
					)} ${validate_component(InputTags, 'InputTags').$$render(
						$$result,
						{ selectedOptions: input.tags },
						{
							selectedOptions: ($$value) => {
								input.tags = $$value;
								$$settled = false;
							}
						},
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
					return `${validate_component(TextArea, 'TextArea').$$render(
						$$result,
						{
							name: 'directions',
							placeholder: 'Directions',
							value: input.directions
						},
						{
							value: ($$value) => {
								input.directions = $$value;
								$$settled = false;
							}
						},
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
					return `${validate_component(InputIngredients, 'InputIngredients').$$render(
						$$result,
						{ rows: input.ingredients },
						{
							rows: ($$value) => {
								input.ingredients = $$value;
								$$settled = false;
							}
						},
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
					return `${validate_component(SubmitButton, 'SubmitButton').$$render($$result, { name: 'Add' }, {}, {})}`;
				}
			}
		)}</div></form>`;
	} while (!$$settled);
	return $$rendered;
});
export { Page as default };
