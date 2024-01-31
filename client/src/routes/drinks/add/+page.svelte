<script lang="ts">
	import InputText from "../../../components/inputs/InputText.svelte";
	import TextArea from "../../../components/inputs/TextArea.svelte";
	import type { CreateDrinkRequest }  from "$lib/types/drink";

	const input: CreateDrinkRequest = {} as CreateDrinkRequest;
</script>

<form>
	<div class="flex">
		<InputText placeholder="Name" name="name" bind:value={input.name}/>
		<TextArea bind:value={input.directions} name="directions" placeholder="Directions"/>
	</div>
</form>