<script lang="ts">
	export let name: string;
	export let placeholder: string = '';
	export let value: string = '';
	export let type: string = 'text';

	const updateValue = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = target.value;
	};
</script>

<input
	class="rounded-md border-2 border-black p-[10px] font-bold shadow-medium outline-none"
	{type}
	{name}
	{placeholder}
	aria-label={placeholder}
	{value}
	on:change={updateValue}
/>
