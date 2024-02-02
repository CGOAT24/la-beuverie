<script lang="ts">
	import InputText from "../../../components/inputs/InputText.svelte";
	import TextArea from "../../../components/inputs/TextArea.svelte";
	import type { CreateDrinkRequest } from "$lib/types/drink";
	import Button from "../../../components/inputs/SubmitButton.svelte";

	const input: CreateDrinkRequest = {} as CreateDrinkRequest;
</script>

<form>
	<div class="flex gap-2">
		<InputText placeholder="Name" name="name" bind:value={input.name} />
		<TextArea bind:value={input.directions} name="directions" placeholder="Directions" />
		<Button name="Add" color="#C5A0FF" />
	</div>
</form>
