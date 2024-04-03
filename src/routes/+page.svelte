<script lang="ts">
	import type { PageServerLoad } from '../../.svelte-kit/types/src/routes/$types';
	import Card from '../components/Card.svelte';

	export let data: PageServerLoad;
	const { drinks } = data;
</script>

<div class="flex flex-wrap justify-stretch">
	{#if drinks.length > 0}
		{#each drinks as drink}
			<a href="/drinks/{drink.id}">
				<Card name={drink.name} />
			</a>
		{/each}
	{:else}
		No drinks!
	{/if}
</div>
