<script lang="ts">
	import { getColor } from '$lib/randomColorGenerator';

	export let selectedOptions: string[] = [];
	let chipInput = '';

	const addChip = () => {
		if (chipInput.trim() !== '') {
			selectedOptions = [...selectedOptions, chipInput.trim()];
			chipInput = '';
		}
	};

	const removeChip = (index: number) => {
		selectedOptions = selectedOptions.filter((_, i) => i !== index);
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			addChip();
		}
	};

	const handleInput = (event: { target: { value: string } }) => {
		chipInput = event.target.value;
	};

	const handleBlur = () => {
		addChip();
	};
</script>

<div
	class="flex flex-wrap rounded-md border-2 border-black p-[10px] font-bold shadow-medium outline-none"
>
	{#each selectedOptions as chip, index}
		<button
			type="button"
			class="m-1 py-1 px-2 rounded cursor-pointer border-2 bg-default"
			on:click={() => removeChip(index)}
			style:background-color={getColor()}
		>
			{chip}
		</button>
	{/each}
	<input
		type="text"
		bind:value={chipInput}
		on:keypress={handleKeyPress}
		on:input={handleInput}
		on:blur={handleBlur}
		placeholder={selectedOptions.length === 0 ? 'Enter a tag' : ''}
		class="outline-none bg-default"
		name="tags"
	/>
</div>
