<script lang="ts">
	import { Editor } from '@tiptap/core';
	import { onMount } from 'svelte';
	import { StarterKit } from '@tiptap/starter-kit';

	export let value: string = '';

	let element: Element;

	onMount(() => {
		new Editor({
			editorProps: {
				attributes: {
					class: 'focus:outline-none'
				}
			},
			element: element,
			extensions: [StarterKit],
			content: value,
			editable: false
		});
	});
</script>

<div class="border-black shadow-medium border-2 w-full ml-5">
	<div bind:this={element} class="m-1" />
</div>
