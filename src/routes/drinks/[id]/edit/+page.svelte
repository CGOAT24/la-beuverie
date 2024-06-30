<script lang="ts">
	import InputTags from '../../../../components/inputs/InputTags.svelte';
	import RichTextEditor from '../../../../components/inputs/RichTextEditor.svelte';
	import InputIngredients from '../../../../components/inputs/InputIngredients.svelte';
	import InputText from '../../../../components/inputs/InputText.svelte';
	import Row from '../../../../components/Row.svelte';
	import { browser } from '$app/environment';
	import Tooltip from '../../../../components/Tooltip.svelte';

	export let data;
	const { drink } = data;
	let deleteModalVisible = false;

	const update = async () => {
		if (!drink) {
			return;
		}
		const result = await fetch(`/drinks/${drink.id}/edit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(drink)
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

	const remove = async () => {
		if (!drink) {
			return;
		}
		const result = await fetch(`/drinks/${drink.id}`, {
			method: 'DELETE'
		});

		if (!result.ok) {
			console.log(result);
			return;
		}

		if (browser) {
			window.location.href = `/`;
		}
	};
</script>

<div class="flex justify-center">
	<div class="w-2/3 flex justify-center content-center flex-wrap">
		<Row>
			<InputText placeholder="Name" name="name" bind:value={drink.name} />
		</Row>
		<Row>
			<InputTags bind:selectedOptions={drink.tags} />
		</Row>
		<Row>
			<RichTextEditor bind:value={drink.directions} />
		</Row>
		<Row>
			<InputIngredients bind:rows={drink.ingredients} />
		</Row>
		<Row>
			<button
				on:click={update}
				class="flex cursor-pointer items-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-medium transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#A388EE]"
			>
				Update
			</button>
			<Tooltip bind:visible={deleteModalVisible} on:confirm={remove}>
				<button
					on:click={() => (deleteModalVisible = !deleteModalVisible)}
					class="flex cursor-pointer items-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-medium transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#FF6B6B]"
				>
					Delete
				</button>
			</Tooltip>
		</Row>
	</div>
</div>
