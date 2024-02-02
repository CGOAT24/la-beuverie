<script lang="ts">
	import Icon from "@iconify/svelte";

	export let icon: string;
	export let color: string;
	export let className: string = "";
</script>

<button
	class="{className} border-2 border-[#12110F] rounded-xl p-3 mx-1"
	style="background-color: {color}"
	on:click
>
	<Icon {icon} class="h-6 w-6 bg-inherit" />
	<slot />
</button>

<style>
	button {
		height: 100%;
	}
</style>
