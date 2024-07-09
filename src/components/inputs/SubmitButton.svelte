<script lang="ts">
	export let name: string;
	export let color: string = '#A388EE';
</script>

<input
	type="submit"
	value={name}
	on:click
	class="flex cursor-pointer items-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-medium transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
	style:background-color={color}
/>
