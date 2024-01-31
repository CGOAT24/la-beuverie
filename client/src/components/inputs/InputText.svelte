<script lang="ts">
	export let name: string;
	export let placeholder: string = "";
	export let value: string = "";

	const updateValue = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = target.value;
	}
</script>
<input
	class="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
	type="text"
	name={name}
	placeholder={placeholder}
	aria-label={placeholder}
	value={value}
	on:change={updateValue}
/>