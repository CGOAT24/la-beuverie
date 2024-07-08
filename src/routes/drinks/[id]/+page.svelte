<script lang="ts">
	import Row from '../../../components/Row.svelte';
	import Pill from '../../../components/Pill.svelte';
	import RichText from '../../../components/RichText.svelte';
	import Icon from '@iconify/svelte';

	export let data;
	const { isAuthor, drink } = data;
</script>

<div class="flex justify-center">
	<div class="w-2/3">
		<Row>
			<div class="flex justify-between w-full border-b-4 border-black">
				<h1 class="font-extrabold text-8xl italic text-left w-full">
					{drink.name}
				</h1>
				{#if isAuthor}
					<a class="content-end justify-center mb-4" href="/drinks/{drink.id}/edit">
						<Icon icon="heroicons:pencil-square" class="h-10 w-10 bg-inherit" />
					</a>
				{/if}
			</div>
		</Row>
		<Row>
			<ul class="flex flex-wrap justify-start w-full">
				{#each drink.tags as tag}
					<li class="my-2"><Pill text={tag} /></li>
				{/each}
			</ul>
		</Row>
		<Row>
			<table class="w-full mr-5 shadow-medium border-2 border-black rounded border-separate">
				{#each drink.ingredients as ingredient}
					<tr>
						<td class="w-full p-2">{ingredient}</td>
					</tr>
				{/each}
			</table>
			<RichText bind:value={drink.directions} />
		</Row>
	</div>
</div>
