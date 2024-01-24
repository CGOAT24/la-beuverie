<script>
	import '../app.css';
	import NavbarButton from '../components/NavbarButton.svelte';
	import Icon from '@iconify/svelte';

	const title = 'La Beuverie';
	let searchBarEnabled = false;
	let isAuthenticated = true;

	const searchValueChanged = () => {};

	const userButtonClick = () => {};
</script>

<div
	class="w-100 py-4 rounded-2xl border-4 mx-3 mt-1 mb-5 border-black shadow-[5px_5px_#000000] flex justify-between"
>
	<div class="flex flex-wrap justify-start font-bold ml-3 content-center" id="title">
		<button
			class="border-2 border-black rounded-xl py-1 px-3 mx-1 bg-[#FEC704] text-3xl"
		>
			{ title }
		</button>
	</div>
	<div class="flex flex-wrap justify-end mr-3">
		<NavbarButton
			className="flex justify-between content-center items-center transition ease-in-out duration-700 "
			color="#FEA9AA"
			on:click={() => (searchBarEnabled = true)}
		>
			<Icon icon="heroicons:magnifying-glass" class="h-6 w-6 bg-inherit" />
			{#if searchBarEnabled}
				<input
					type="text"
					class="mx-3 bg-inherit border-b-2 border-black focus:outline-none caret-transparent transition ease-in-out duration-700"
					on:input={searchValueChanged}
				/>
			{/if}
		</NavbarButton>
		<NavbarButton color="#A5EFFF">
			<Icon icon="heroicons:funnel" class="h-6 w-6 bg-inherit" />
		</NavbarButton>
		{#if isAuthenticated}
			<NavbarButton color="#FDF0AB">
				<Icon icon="heroicons:plus" class="h-6 w-6 bg-inherit" />
			</NavbarButton>
		{/if}
		<NavbarButton color="#90EE90" on:click={userButtonClick}>
			<Icon icon="heroicons:user" class="h-6 w-6 bg-inherit" />
		</NavbarButton>
	</div>
</div>
<slot />