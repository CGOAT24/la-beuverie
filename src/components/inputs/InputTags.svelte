<script lang="ts">
	import { writable } from 'svelte/store';
	import { getColor } from '$lib/randomColorGenerator';
	import Icon from '@iconify/svelte';

	let dropdownVisible = false;
	let inputValue = writable<string>('');

	export let options: string[] = [];
	export let selectedOptions: string[] = [];

	function addValue(value: string) {
		if (!selectedOptions.some((x) => x === value)) {
			selectedOptions = [...selectedOptions, value];
		}
		inputValue.set('');
	}

	function removeValue(value: string) {
		selectedOptions = [...selectedOptions.filter((x) => x !== value)];
	}

	function handleCustomValue({ key, target }) {
		if (key === 'Enter' && target.value.trim()) {
			addValue(target.value.trim());
			target.value = '';
		}
	}
</script>

<div class="w-full border-2 border-black rounded shadow-medium">
	<div class="flex justify-between">
		<input
			type="text"
			placeholder="Enter a tag"
			class="box-border bg-default outline-0 p-2 font-bold flex-grow"
			on:keydown={handleCustomValue}
			bind:value={$inputValue}
		/>
		<button on:click={() => (dropdownVisible = !dropdownVisible)} class="mx-2">
			<Icon
				icon={dropdownVisible ? 'heroicons:chevron-up' : 'heroicons:chevron-down'}
				class="h-6 w-6 bg-inherit"
			/>
		</button>
	</div>
	<div class="flex flex-wrap gap-1 my-2 min-h-12">
		{#each selectedOptions as chip}
			<button
				type="button"
				class="m-1 py-1 px-2 rounded cursor-pointer border-2 bg-default"
				on:click={() => removeValue(chip)}
				style:background-color={getColor()}
			>
				{chip}
			</button>
		{/each}
	</div>
	{#if dropdownVisible}
		<div class="p-2 overflow-y-auto max-h-60 shadow-medium">
			{#each options as option}
				<button
					class="p-2 cursor-pointer block w-full text-left border-2 border-black rounded my-2"
					on:click={() => addValue(option)}
				>
					{option}
				</button>
			{/each}
		</div>
	{/if}
</div>
