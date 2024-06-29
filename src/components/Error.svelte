<script lang="ts">
	import Icon from '@iconify/svelte';

	export let title: string = 'Error';
	export let message: string = 'An unexpected error occured.';
</script>

<div class="m-auto flex justify-center flex-col">
	<h1 class="text-center text-9xl font-bold bg-[#FF6B6B] p-4">{title}.</h1>
	<h2 class="text-center mb-14">{message}</h2>
	<div class="flex justify-center flex-row">
		<a class="border-2 border-black rounded p-2 justify-items-center flex" href="/">
			<Icon icon="heroicons:home" class="h-6 w-6 bg-inherit m-2" />
			<span class="my-auto mr-2">Go back home</span>
		</a>
	</div>
</div>
