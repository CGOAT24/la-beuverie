<script lang="ts">
	export let visible = false;
	export let tags = [];
</script>

<div class="relative inline-block">
	<slot />
	{#if visible}
		<div
			class="fixed right-15 p-2 rounded whitespace-nowrap z-50 -translate-x-1/2 border-2 bg-default shadow-large"
		>
			<h2>hello</h2>
			<div>
				<input type="checkbox" />
			</div>
		</div>
	{/if}
</div>
