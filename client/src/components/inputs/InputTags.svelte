<script lang="ts">
	import { createEventDispatcher } from "svelte";

	let options = ["Option 1", "Option 2", "Option 3"];
	let selectedOptions: string[] = [];
	let customValue = "";
	let isOpen = false;

	const dispatch = createEventDispatcher();

	const toggleDropdown = () => (isOpen = !isOpen);

	const selectOption = (option: string) => {
		if (!selectedOptions.includes(option)) {
			selectedOptions = [...selectedOptions, option];
		}
	};

	const removeOption = (option: string) => {
		selectedOptions = selectedOptions.filter((item) => item !== option);
	};

	const handleCustomValue = () => {
		if (customValue.trim() !== "" && !selectedOptions.includes(customValue)) {
			selectedOptions = [...selectedOptions, customValue];
			customValue = "";
		}
	};

	const handleKeyDown = (event: { key: string }) => {
		if (event.key === "Enter") {
			handleCustomValue();
		}
	};

	const closeDropdown = () => {
		isOpen = false;
	};

	const dispatchSelectedOptions = () => {
		dispatch("selected", selectedOptions);
	};

	const getTagColor = (): string => {
		const colors = ["#DAF5F0", "#B5D2AD", "#FDFD96", "#F8D6B3", "#FCDFFF", "#E3DFF2"];
		const rand = Math.floor(Math.random() * colors.length);
		return colors[rand];
	};
</script>

<div
	role="button"
	tabindex="0"
	class="relative inline-block rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full"
	on:keydown={handleKeyDown}
>
	<div class="relative">
		<div
			role="button"
			tabindex="0"
			class="flex items-center justify-between border-black border-2 px-2 py-1 rounded cursor-pointer"
			on:click={toggleDropdown}
			on:keydown={toggleDropdown}
		>
			{#each selectedOptions as option}
				<div
					class="px-2 py-1 rounded-full mr-1 mb-1 border-black border-2"
					style="background-color: {getTagColor()}"
				>
					{option}
					<button class="ml-1" on:click={() => removeOption(option)}>&times;</button>
				</div>
			{/each}
			<input
				type="text"
				bind:value={customValue}
				placeholder="Tags"
				class="flex-1 ml-2 outline-none"
			/>
		</div>
		{#if isOpen}
			<div
				class="border-black border-x-2 border-b-2 w-full z-[1000] overflow-y-auto absolute max-h-28"
			>
				{#each options as option}
					<div
						role="button"
						class="px-2 py-1 cursor-pointer border-t-2 border-black"
						on:click={() => selectOption(option)}
						on:keydown={() => selectOption(option)}
						tabindex="0"
					>
						{option}
					</div>
				{/each}
				<button
					class="px-2 py-1 w-full text-left cursor-pointer border-t-2 border-black"
					on:click={handleCustomValue}
				>
					{customValue.length > 0 ? customValue : "Custom value"}
				</button>
			</div>
		{/if}
	</div>
</div>
