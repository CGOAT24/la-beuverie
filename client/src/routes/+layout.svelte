<script>
	import "../app.css";
	import NavbarButton from "../components/NavbarButton.svelte";
	import Marquee from "../components/Marquee.svelte";

	let searchBarEnabled = false;
	let searchBarValue = "";
	let isAuthenticated = true;

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
		<NavbarButton
			className="flex justify-between items-center"
			color="#FF7A5C"
			icon="heroicons:magnifying-glass"
			on:click={() => (searchBarEnabled = true)}
		>
			{#if searchBarEnabled}
				<input
					type="text"
					class="mx-2 bg-inherit border-b-2 border-black focus:outline-none caret-transparent transition ease-in-out duration-700"
					on:input={searchValueChanged}
					value={searchBarValue}
				/>
			{/if}
		</NavbarButton>
		<NavbarButton color="#87CEEB" on:click={showFilterModal} icon="heroicons:funnel" />
		{#if isAuthenticated}
			<a href="/drinks/add">
				<NavbarButton color="#F4D738" icon="heroicons:plus" />
			</a>
		{/if}
		<a href="/users/me">
			<NavbarButton color="#90EE90" icon="heroicons:user" />
		</a>
	</div>
</div>
<div class="m-5 flex justify-center">
	<slot />
</div>
