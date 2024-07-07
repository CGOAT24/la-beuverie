<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import { getColor } from '$lib/randomColorGenerator';

	const dispatch = createEventDispatcher();

	export let visible = false;
	export let tags: { value: string; enabled: boolean }[] = [];

	const updateValue = (i: number) => {
		tags[i].enabled = !tags[i].enabled;
		dispatch('update');
	};
</script>

<div class="relative inline-block">
	<slot />
	{#if visible}
		<div
			class="fixed p-2 rounded whitespace-nowrap z-50 border-2 bg-default shadow-large w-1/2 right-1/4"
		>
			<div class="flex justify-between mb-1">
				<div></div>
				<h2 class="text-center text-3xl font-light w-full tracking-widest">TAGS</h2>
				<button on:click={() => (visible = false)}>
					<Icon icon="heroicons:x-mark" class="h-6 w-6 bg-inherit" />
				</button>
			</div>
			<div class="flex justify-evenly w-full flex-wrap">
				{#each tags as tag, i}
					<div
						class="m-4 p-2 rounded shadow-small border-black border-2"
						style:background-color={getColor()}
					>
						<input
							type="checkbox"
							checked={tag.enabled}
							class="w-4 h-4 text-black bg-black border-none focus:ring-0 rounded"
							on:click={() => updateValue(i)}
						/>
						<span class="my-auto px-2">{tag.value}</span>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
