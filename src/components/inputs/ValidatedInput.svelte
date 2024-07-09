<script lang="ts">
	export let errors: string[] | undefined = [];
</script>

<div class="flex flex-col w-full gap-2">
	<div class="mb-1 w-full">
		{#if errors?.length}
			<ul>
				{#each errors as error}
					<li class="bg-[#FF6B6B] p-2 w-fit">{error}</li>
				{/each}
			</ul>
		{/if}
	</div>
	<slot />
</div>
