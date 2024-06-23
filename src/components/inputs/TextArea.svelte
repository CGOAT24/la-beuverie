<script lang="ts">
	export let name: string;
	export let placeholder: string = '';
	export let value: string = '';

	const updateValue = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = target.value;
	};
</script>

<textarea
	class="resize-none rounded-md border-2 border-black p-[10px] font-bold shadow-medium outline-none overflow-y-hidden w-full"
	{name}
	{placeholder}
	{value}
	on:change={updateValue}
/>
