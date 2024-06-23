<script lang="ts">
	import { getColor } from '$lib/randomColorGenerator';

	export let text: string;
	const backgroundColor = getColor();
</script>

<div
	class="inline-block py-2 px-4 rounded-2xl border-4 border-black shadow-large font-bold"
	style="background-color: {backgroundColor};"
>
	{text}
</div>
