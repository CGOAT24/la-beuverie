<script lang="ts">
	import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/drinks/[id]/$types';
	import Row from '../../../components/Row.svelte';
	import Pill from '../../../components/Pill.svelte';

	export let data: PageServerLoad;
</script>

<div class="flex flex-wrap w-full">
	<Row>
		<h1 class="font-extrabold text-8xl italic">{data.drink.name}</h1>
	</Row>
	<Row>
		<ul>
			{#each data.drink.tags as tag}
				<li><Pill text={tag} /></li>
			{/each}
		</ul>
	</Row>
	<Row>
		<table class="border-black border-2 w-full h-full px-5">
			{#each data.drink.ingredients as ingredient}
				<tr class="border-2">
					<td class="w-full p-2">{ingredient}</td>
				</tr>
			{/each}
		</table>
		<p class="w-full px-5 h-full">{data.drink.directions}</p>
	</Row>
</div>
