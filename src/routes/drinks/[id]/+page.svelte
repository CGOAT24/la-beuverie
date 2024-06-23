<script lang="ts">
	import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/drinks/[id]/$types';
	import Row from '../../../components/Row.svelte';
	import Pill from '../../../components/Pill.svelte';
	import RichTextEditor from '../../../components/inputs/RichTextEditor.svelte';
	import RichText from '../../../components/RichText.svelte';

	export let data: PageServerLoad;
</script>

<div class="flex justify-center">
	<div class="w-2/3">
		<Row>
			<h1 class="font-extrabold text-8xl italic">{data.drink.name}</h1>
		</Row>
		<Row>
			<ul class="flex flex-wrap justify-start w-full ">
				{#each data.drink.tags as tag}
					<li><Pill text={tag} /></li>
				{/each}
			</ul>
		</Row>
		<Row>
			<table class="border-black border-2 h-full px-5 w-full mr-5">
				{#each data.drink.ingredients as ingredient}
					<tr class="border-2">
						<td class="w-full p-2">{ingredient}</td>
					</tr>
				{/each}
			</table>
			<RichText bind:value={data.drink.directions}/>
		</Row>
	</div>
	
</div>
