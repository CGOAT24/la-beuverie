<script lang="ts">
	export let color: string;
	export let tailwind: string | undefined;
</script>

<button
	class="{tailwind} border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1"
	style="background-color: {color}"
	on:click
>
	<slot />
</button>
