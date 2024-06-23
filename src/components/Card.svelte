<script lang="ts">
	import { getColor } from '$lib/randomColorGenerator';

	export let name: string;
	let hover = false;
</script>

<button
	class="hover:scale-110 transition ease-in-out p-4 m-3 rounded-2xl border-4 border-black shadow-large font-bold uppercase"
	style="background-color: {hover ? getColor() : 'inherit'}"
	on:mouseenter={() => (hover = !hover)}
	on:mouseleave={() => (hover = !hover)}
>
	{name}
</button>
