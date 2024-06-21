<script lang="ts">
	import Icon from '@iconify/svelte';
	export let rows: string[] = [];

	const addRow = () => (rows = [...rows, '']);

	const update = (event: { target: { value: string } }, i: number) => {
		const value = event.target.value;
		if (value) {
			rows[i] = event.target.value;
		}
	};

	const removeRow = (i: number) => {
		rows = rows.filter((_, num) => num !== i);
	};

	const isHoveringDeleteBtn: Map<number, boolean> = new Map();

	const setIsHoveringTrue = (i: number) => {
		isHoveringDeleteBtn.set(i, true);
	};

	const setIsHoveringFalse = (i: number) => {
		isHoveringDeleteBtn.set(i, false);
	};

	const isHovering = (i: number): boolean => {
		console.log(i);
		return isHoveringDeleteBtn.get(i) ?? false;
	};
</script>

<div class="w-full">
	<table class="w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
		<tr>
			<th class="font-bold text-xl">Ingredients</th>
		</tr>
		{#each rows as row, i}
			<tr>
				<td>
					<div
						class="flex justify-between"
						style:background-color={isHovering(i) ? '#FF6B6B' : 'inherit'}
					>
						<input
							class="w-full h-full outline-none p-1 font-bold text-right"
							style:background-color={isHovering(i) ? '#FF6B6B' : 'inherit'}
							type="text"
							value={row}
							on:change={(e) => update(e, i)}
						/>
						<button
							class="relative flex justify-center rounded-3xl border-black border-2 translate-x-5 bg-[#FF0000] mx-1"
							on:click={() => removeRow(i)}
							on:mouseover={() => setIsHoveringTrue(i)}
							on:focus={() => setIsHoveringTrue(i)}
							on:mouseleave={() => setIsHoveringFalse(i)}
						>
							<Icon icon="heroicons:minus" class="h-6 w-6 bg-inherit" />
						</button>
					</div>
				</td>
			</tr>
		{/each}
	</table>
	<button
		class="relative flex justify-center rounded border-black border-2 text-center bg-[#FFDB58] scale-125 -translate-y-1 -translate-x-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-none"
		on:click={addRow}
	>
		<Icon icon="heroicons:plus" class="h-6 w-6 bg-inherit" />
	</button>
</div>

<style>
	table {
		border-spacing: 0;
		border-collapse: separate;
		border-radius: 0.25rem;
		border: 2px solid black;
	}

	table th:not(:last-child),
	table td:not(:last-child) {
		border-right: 2px solid black;
	}

	table > tr:not(:last-child) > td,
	table > tr:not(:last-child) > th {
		border-bottom: 2px solid black;
	}
</style>
