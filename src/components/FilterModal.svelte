<script lang="ts">
	import Icon from '@iconify/svelte';

	export let visible = false;
	export let tags: string[] = [];
</script>

<div class="relative inline-block">
	<slot />
	{#if visible}
		<div
			class="fixed p-2 rounded whitespace-nowrap z-50 border-2 bg-default shadow-large w-1/2 right-1/4"
		>
			<div class="flex justify-between">
				<div></div>
				<h2 class="text-center text-3xl font-light w-full tracking-widest">TAGS</h2>
				<button on:click={() => (visible = false)}>
					<Icon icon="heroicons:x-mark" class="h-6 w-6 bg-inherit" />
				</button>
			</div>

			<div class="flex justify-start w-full flex-wrap">
				{#each tags as tag}
					<div class="m-2">
						<input type="checkbox" />
						{tag}
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
