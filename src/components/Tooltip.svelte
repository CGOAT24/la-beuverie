<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let visible = false;
	const dispatch = createEventDispatcher();
</script>

<div class="relative inline-block">
	<slot />
	{#if visible}
		<div
			class="absolute bottom-[125%] left-1/2 p-2 rounded whitespace-nowrap z-50 -translate-x-1/2 border-2 bg-default shadow-large"
		>
			Are you sure?<br />
			<div class="flex justify-around">
				<button class="bg-[#FF6B6B] rounded px-2 border-2" on:click={() => dispatch('confirm')}
					>Yes</button
				>
				<button class="rounded px-2 border-2" on:click={() => (visible = false)}>No</button>
			</div>
		</div>
	{/if}
</div>
