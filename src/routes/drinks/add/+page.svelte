<script lang="ts">
	import InputText from '../../../components/inputs/InputText.svelte';
	import TextArea from '../../../components/inputs/TextArea.svelte';
	import type { CreateDrinkRequest } from '$lib/types/drink';
	import InputTags from '../../../components/inputs/InputTags.svelte';
	import Row from '../../../components/Row.svelte';
	import InputIngredients from '../../../components/inputs/InputIngredients.svelte';
	import SubmitButton from '../../../components/inputs/SubmitButton.svelte';

	const input: CreateDrinkRequest = {
		name: '',
		ingredients: [''],
		tags: [],
		directions: ''
	};

	const add = () => {
		console.log(input);
	};
</script>

<form class="flex justify-center content-center">
	<div>
		<Row>
			<InputText placeholder="Name" name="name" bind:value={input.name} />
			<InputTags bind:selectedOptions={input.tags} />
		</Row>
		<Row>
			<TextArea bind:value={input.directions} name="directions" placeholder="Directions" />
		</Row>
		<Row>
			<InputIngredients bind:rows={input.ingredients} />
		</Row>
		<Row>
			<SubmitButton name="Add" on:click={add} />
		</Row>
	</div>
</form>
