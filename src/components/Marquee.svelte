<script lang="ts">
	const count: number = 2;
	const data: string[] = Array(count).fill('La Beuverie');
</script>

<div class="relative flex w-full overflow-x-hidden font-bold max-w-80">
	<div class="animate-marquee whitespace-nowrap">
		{#each data as elem}
			<span class="mx-4 text-4xl title my-auto">
				{elem}
			</span>
		{/each}
	</div>
	<div class="absolute top-0 animate-marquee2 whitespace-nowrap">
		{#each data as elem}
			<span class="mx-4 text-4xl title my-auto">
				{elem}
			</span>
		{/each}
	</div>
</div>
