<script lang="ts">
	import InputText from '../../../components/inputs/InputText.svelte';
	import InputTags from '../../../components/inputs/InputTags.svelte';
	import Row from '../../../components/Row.svelte';
	import InputIngredients from '../../../components/inputs/InputIngredients.svelte';
	import RichTextEditor from '../../../components/inputs/RichTextEditor.svelte';
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';
	import ValidatedInput from '../../../components/inputs/ValidatedInput.svelte';
	import { request } from '$lib/utils/HTTPRequest';

	export let data;
	const { tags } = data;
	const errors = writable<Record<string, string[]>>({});

	const input: Request.CreateDrink = {
		name: '',
		ingredients: [''],
		tags: [],
		directions: '',
		userId: ''
	};

	const add = async () => {
		const response = await request.post('/api/drinks', input);

		if (response.errors) {
			errors.set(response.errors);
			return;
		}

		if (browser && response.data?.id) {
			window.location.href = `/drinks/${response.data.id}`;
		}
	};
</script>

<div class="flex justify-center">
	<div class="flex justify-center content-center flex-wrap w-2/3">
		<Row>
			<ValidatedInput errors={$errors.name}>
				<div class="w-1/3"></div>
				<InputText placeholder="Name" name="name" bind:value={input.name} />
			</ValidatedInput>
		</Row>
		<Row>
			<ValidatedInput errors={$errors.tags}>
				<InputTags bind:selectedOptions={input.tags} options={tags} />
			</ValidatedInput>
		</Row>
		<Row>
			<ValidatedInput errors={$errors.directions}>
				<RichTextEditor bind:value={input.directions} />
			</ValidatedInput>
		</Row>
		<Row>
			<ValidatedInput errors={$errors.ingredients}>
				<InputIngredients bind:rows={input.ingredients} />
			</ValidatedInput>
		</Row>
		<Row>
			<button
				on:click={add}
				class="flex cursor-pointer items-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-medium transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#A388EE]"
			>
				Add
			</button>
		</Row>
	</div>
</div>
