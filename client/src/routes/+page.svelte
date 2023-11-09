<script>
	import Card from './components/Card.svelte';
	import drinks from '$lib/data.json';
</script>

{#each drinks as drink}
	<Card name={drink.name} class="hover:scale-110 transition ease-in-out" />
{/each}
