<script lang="ts">
	import { createEventDispatcher } from "svelte";

	let options = ["Option 1", "Option 2", "Option 3"];
	let selectedOptions: string[] = [];
	let customValue = "";
	let isOpen = false;

	const dispatch = createEventDispatcher();

	const toggleDropdown = () => isOpen = !isOpen;

	const selectOption = (option: string) => {
		if (!selectedOptions.includes(option)) {
			selectedOptions = [...selectedOptions, option];
		}
	}

	const removeOption = (option: string) => {
		selectedOptions = selectedOptions.filter((item) => item !== option);
	}

	const handleCustomValue = () => {
		if (customValue.trim() !== "" && !selectedOptions.includes(customValue)) {
			selectedOptions = [...selectedOptions, customValue];
			customValue = "";
		}
	}

	const handleKeyDown = (event: { key: string }) => {
		if (event.key === "Enter") {
			handleCustomValue();
		}
	}

	const closeDropdown = () => {
		isOpen = false;
	}

	const dispatchSelectedOptions = () => {
		dispatch("selected", selectedOptions);
	}
</script>
<div role="button" tabindex="0" class="dropdown" on:keydown={handleKeyDown} >
	<div class="relative">
		<div role="button" tabindex="0"
			class="flex items-center justify-between border border-gray-300 px-2 py-1 rounded cursor-pointer"
			on:click={toggleDropdown}
				 on:keydown={toggleDropdown}
		>
			{#each selectedOptions as option}
				<div class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-1 mb-1">
					{option}
					<button class="ml-1" on:click={() => removeOption(option)}>&times;</button>
				</div>
			{/each}
			<input
				type="text"
				bind:value={customValue}
				placeholder="Enter custom value"
				class="flex-1 ml-2 outline-none"
			/>
		</div>
		{#if isOpen}
			<div class="dropdown-menu">
				{#each options as option}
					<div role="button"
						class="px-2 py-1 cursor-pointer hover:bg-gray-100"
						on:click={() => selectOption(option)}
							 on:keydown={() => selectOption(option)}
							 tabindex="0"
					>
						{option}
					</div>
				{/each}
				<button class="px-2 py-1 cursor-pointer hover:bg-gray-100" on:click={handleCustomValue}>
					Add "{customValue}"
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-menu {
		position: absolute;
		border: 2px solid black;
		max-height: 150px;
		overflow-y: auto;
		z-index: 1000;
		width: 100%;
	}
</style>
