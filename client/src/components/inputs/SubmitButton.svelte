<script lang="ts">
	export let name: string;
	export let color: string = "#bc95d4";
</script>

<input
	type="submit"
	value={name}
	on:click
	class="flex cursor-pointer items-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
	style="background-color: {color};"
/>
