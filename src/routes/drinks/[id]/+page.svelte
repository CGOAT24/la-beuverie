<script lang="ts">
	import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/drinks/[id]/$types';
	import Row from '../../../components/Row.svelte';
	import Pill from '../../../components/Pill.svelte';

	export let data: PageServerLoad;
</script>

<div class="flex flex-wrap">
	<Row>
		<h1 class="font-extrabold text-9xl italic">{data.drink.name}</h1>
	</Row>
	<Row>
		<ul>
			{#each data.drink.tags as tag}
				<li><Pill text={tag} /></li>
			{/each}
		</ul>
	</Row>
	<Row>
		<p>{data.drink.directions}</p>
	</Row>
	<Row>
		<h2>Ingredients</h2>
		<ul>
			{#each data.drink.ingredients as ingredient}
				<li>{ingredient}</li>
			{/each}
		</ul>
	</Row>
</div>
