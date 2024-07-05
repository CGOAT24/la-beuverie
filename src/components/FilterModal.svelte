<script lang="ts">
	export let visible = false;
</script>

<div class="relative inline-block">
	<slot />
	{#if visible}
		<div
			class="absolute bottom-[125%] left-1/2 p-2 rounded whitespace-nowrap z-50 -translate-x-1/2 border-2 bg-default shadow-large"
		>
			hello :)
		</div>
	{/if}
</div>
