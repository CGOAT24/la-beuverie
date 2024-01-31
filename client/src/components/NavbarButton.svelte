<script lang="ts">
	import Icon from "@iconify/svelte";

	export let icon: string;
	export let color: string;
	export let className: string | undefined = undefined;
</script>

<button
	class="${className} border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1"
	style="background-color: {color}"
	on:click
>
	<Icon icon="{icon}" class="h-6 w-6 bg-inherit" />
	<slot />
</button>
