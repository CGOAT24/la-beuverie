<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let selectedOptions: string[] = [];
	let chipInput = '';

	createEventDispatcher();

	const addChip = () => {
		if (chipInput.trim() !== '') {
			selectedOptions = [...selectedOptions, chipInput.trim()];
			chipInput = '';
		}
	};

	const removeChip = (index: number) => {
		selectedOptions = selectedOptions.filter((_, i) => i !== index);
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			addChip();
		}
	};

	const handleInput = (event) => {
		chipInput = event.target.value;
	};

	const handleBlur = () => {
		addChip();
	};
</script>

<div
	class="flex flex-wrap rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none"
>
	{#each selectedOptions as chip, index}
		<button type="button" class="chip" on:click={() => removeChip(index)}>
			{chip}
		</button>
	{/each}
	<input
		type="text"
		bind:value={chipInput}
		on:keypress={handleKeyPress}
		on:input={handleInput}
		on:blur={handleBlur}
		placeholder="Enter a tag"
		class="outline-none"
		name="tags"
	/>
</div>

<style>
	.chip {
		margin: 0.5rem;
		padding: 0.25rem 0.5rem;
		background-color: #007bff;
		color: white;
		border-radius: 0.25rem;
		cursor: pointer;
	}
</style>
