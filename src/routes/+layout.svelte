<script lang="ts">
	import '../app.css';
	import NavbarButton from '../components/NavbarButton.svelte';
	import Marquee from '../components/Marquee.svelte';
	import type { LayoutData } from '../../.svelte-kit/types/src/routes/$types';
	import Icon from '@iconify/svelte';

	let searchBarEnabled = false;
	let searchBarValue = '';

	export let data: LayoutData;
	const { isAuthenticated } = data;

	const searchValueChanged = () => {};

	const showFilterModal = () => {};
</script>

<div
	class="w-100 py-4 rounded-2xl border-4 mx-3 mt-1 mb-5 border-black shadow-[5px_5px_#000000] flex justify-between"
>
	<a href="/">
		<div class="flex flex-wrap justify-start font-bold ml-3 content-center h-full">
			<Marquee />
		</div>
	</a>

	<div class="flex flex-wrap justify-end mr-3">
		<a href="https://github.com/cgoat24/la-beuverie" target="_blank">
			<NavbarButton color="#FFFFFF" icon="simple-icons:github" />
		</a>
		<NavbarButton
			className="flex justify-between items-center"
			color="#FF7A5C"
			icon="heroicons:magnifying-glass"
			on:click={() => (searchBarEnabled = true)}
		>
			{#if searchBarEnabled}
				<input
					type="text"
					class="mx-2 bg-[#FF7A5C] border-b-2 border-black focus:outline-none caret-transparent transition ease-in-out duration-700"
					on:input={searchValueChanged}
					value={searchBarValue}
				/>
				<button on:click={() => (searchBarEnabled = false)}>
					<Icon icon="heroicons:x-mark" class="h-6 w-6 bg-inherit" />
				</button>
			{/if}
		</NavbarButton>
		<NavbarButton color="#90EE90" on:click={showFilterModal} icon="heroicons:funnel" />
		<a href="/drinks/add">
			<NavbarButton color="#F4D738" icon="heroicons:plus" />
		</a>
		{#if isAuthenticated}
			<form method="POST" action="/auth/logout">
				<NavbarButton color="#87CEEB" icon="heroicons:arrow-left-start-on-rectangle" />
			</form>
		{:else}
			<a href="/auth/login">
				<NavbarButton color="#87CEEB" icon="heroicons:arrow-left-end-on-rectangle" />
			</a>
		{/if}
	</div>
</div>
<div class="m-5 flex justify-center w-fit h-full">
	<slot />
</div>
