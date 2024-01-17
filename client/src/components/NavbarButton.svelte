<script lang="ts">
	export let color: string;
</script>

<button
	class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1"
	style="background-color: {color}"
	on:click
>
	<slot />
</button>