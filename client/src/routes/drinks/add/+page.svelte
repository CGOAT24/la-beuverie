<script lang="ts">
	import InputText from "../../../components/inputs/InputText.svelte";
	import TextArea from "../../../components/inputs/TextArea.svelte";
	import type { CreateDrinkRequest } from "$lib/types/drink";
	import Button from "../../../components/inputs/SubmitButton.svelte";
	import InputTags from "../../../components/inputs/InputTags.svelte";

	const input: CreateDrinkRequest = {} as CreateDrinkRequest;

	/*
	export interface CreateDrinkRequest {
		name: string;
		directions: string;
		tags: string[];
		ingredients: string[];
	}
	 */
</script>

<form>
	<InputText placeholder="Name" name="name" bind:value={input.name} />
	<TextArea bind:value={input.directions} name="directions" placeholder="Directions" />
	<InputTags />
	<Button name="Add" color="#C5A0FF" />
</form>
