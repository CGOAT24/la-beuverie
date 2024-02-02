<script>
	import Card from "../components/Card.svelte";
	import drinks from "$lib/data.json";
</script>

<div class="flex flex-wrap justify-stretch">
	{#each drinks as drink}
		<a href="/drinks/{drink.id}">
			<Card name={drink.name} />
		</a>
	{/each}
</div>
