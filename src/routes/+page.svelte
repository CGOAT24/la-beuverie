<script lang="ts">
	import Card from '../components/Card.svelte';
	import { drinks } from '$lib/stores/drinksStore';
	import { onMount } from 'svelte';

	onMount(async () => {
		await drinks.getAll();
	});
</script>

<div class="flex flex-wrap justify-stretch">
	{#if $drinks.length > 0}
		{#each $drinks as drink}
			<a href="/drinks/{drink.id}">
				<Card name={drink.name} />
			</a>
		{/each}
	{:else}
		No drinks!
	{/if}
</div>
