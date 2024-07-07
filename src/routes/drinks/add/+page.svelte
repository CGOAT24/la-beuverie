<script lang="ts">
	import InputText from '../../../components/inputs/InputText.svelte';
	import InputTags from '../../../components/inputs/InputTags.svelte';
	import Row from '../../../components/Row.svelte';
	import InputIngredients from '../../../components/inputs/InputIngredients.svelte';
	import RichTextEditor from '../../../components/inputs/RichTextEditor.svelte';
	import { browser } from '$app/environment';

	const input: Request.CreateDrink = {
		name: '',
		ingredients: [],
		tags: [],
		directions: '',
		userId: ''
	};

	const add = async () => {
		const result = await fetch('/api/drinks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(input)
		});
		const response = await result.json();

		if (response.errors) {
			console.log(response);
			return;
		}

		if (browser) {
			window.location.href = `/drinks/${response.id}`;
		}
	};
</script>

<div class="flex justify-center">
	<form class="flex justify-center content-center flex-wrap w-2/3">
		<Row>
			<InputText placeholder="Name" name="name" bind:value={input.name} />
		</Row>
		<Row>
			<InputTags bind:selectedOptions={input.tags} />
		</Row>
		<Row>
			<RichTextEditor bind:value={input.directions} />
		</Row>
		<Row>
			<InputIngredients bind:rows={input.ingredients} />
		</Row>
		<Row>
			<button
				on:click={add}
				class="flex cursor-pointer items-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-medium transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#A388EE]"
			>
				Add
			</button>
		</Row>
	</form>
</div>
