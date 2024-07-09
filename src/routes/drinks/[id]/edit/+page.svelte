<script lang="ts">
	import InputTags from '../../../../components/inputs/InputTags.svelte';
	import RichTextEditor from '../../../../components/inputs/RichTextEditor.svelte';
	import InputIngredients from '../../../../components/inputs/InputIngredients.svelte';
	import InputText from '../../../../components/inputs/InputText.svelte';
	import Row from '../../../../components/Row.svelte';
	import { browser } from '$app/environment';
	import Tooltip from '../../../../components/Tooltip.svelte';
	import { request } from '$lib/utils/HTTPRequest';
	import ValidatedInput from '../../../../components/inputs/ValidatedInput.svelte';
	import { writable } from 'svelte/store';

	export let data;
	const { drink } = data;
	let deleteModalVisible = false;
	const errors = writable<Record<string, string[]>>({});

	const update = async () => {
		if (!drink) {
			return;
		}
		const response = await request.put(`/api/drinks/${drink.id}`, drink);

		if (response.errors) {
			errors.set(response.errors);
			return;
		}

		if (browser && response.data?.id) {
			window.location.href = `/drinks/${response.data.id}`;
		}
	};

	const remove = async () => {
		if (!drink) {
			return;
		}
		const result = await request.delete(`/api/drinks/${drink.id}`);

		if (result.errors) {
			errors.set(result.errors);
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
			<ValidatedInput errors={$errors.name}>
				<InputText placeholder="Name" name="name" bind:value={drink.name} />
			</ValidatedInput>
		</Row>
		<Row>
			<ValidatedInput errors={$errors.tags}>
				<InputTags bind:selectedOptions={drink.tags} />
			</ValidatedInput>
		</Row>
		<Row>
			<ValidatedInput errors={$errors.directions}>
				<RichTextEditor bind:value={drink.directions} />
			</ValidatedInput>
		</Row>
		<Row>
			<ValidatedInput errors={$errors.ingredients}>
				<InputIngredients bind:rows={drink.ingredients} />
			</ValidatedInput>
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
