<script lang="ts">
	export let name: string;
	let hover = false;

	const getColor = (): string => {
		const colors: string[] = ["#69D2E7", "#7FBC8C", "#E3A018", "#FF6B6B", "#FF69B4", "#9723C9"];
		const rand = Math.floor(Math.random() * colors.length);
		return colors[rand];
	};
</script>

<button
	class="hover:scale-110 transition ease-in-out p-4 m-3 rounded-2xl border-4 border-[#12110F] shadow-[5px_5px_0_1px_#12110F] font-bold uppercase"
	style="background-color: {hover ? getColor() : 'inherit'}"
	on:mouseenter={() => (hover = !hover)}
	on:mouseleave={() => (hover = !hover)}
>
	{name}
</button>

<style>
</style>
