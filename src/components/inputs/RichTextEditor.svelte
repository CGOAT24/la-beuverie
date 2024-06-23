<script lang="ts">
	import { Editor } from '@tiptap/core';
	import { onMount } from 'svelte';
	import { StarterKit } from '@tiptap/starter-kit';

	export let value: string = '';
	const content = value;

	let element: Element;
	let editor: Editor;

	const buttonClass = 'p-2 h-full';
	const activeColor = '#BAFCA2';
	const supportLists = false;

	onMount(() => {
		editor = new Editor({
			editorProps: {
				attributes: {
					class: 'focus:outline-none'
				}
			},
			element: element,
			autofocus: false,
			extensions: [StarterKit],
			content: content,
			onTransaction: () => {
				editor = editor;
			},
			onUpdate: ({ editor }) => {
				value = editor.getHTML();
			}
		});
	});
</script>

<div class="border-black shadow-large border-2 rounded w-full">
	{#if editor}
		<div class="border-black border-b-2 flex justify-between">
			<div class="basis-1/3">
				<button
					on:click={() => editor.chain().focus().toggleBold().run()}
					style:background-color={editor.isActive('bold') ? activeColor : 'inherit'}
					class={buttonClass}
				>
					Bold
				</button>
				<button
					on:click={() => editor.chain().focus().toggleItalic().run()}
					style:background-color={editor.isActive('italic') ? activeColor : 'inherit'}
					class={buttonClass}
				>
					Italic
				</button>
				<button
					on:click={() => editor.chain().focus().toggleStrike().run()}
					style:background-color={editor.isActive('strike') ? activeColor : 'inherit'}
					class={buttonClass}
				>
					Strike
				</button>
				{#if supportLists}
					<button
						on:click={() => editor.chain().focus().toggleBulletList().run()}
						style:background-color={editor.isActive('bulletList') ? activeColor : 'inherit'}
						class={buttonClass}
					>
						Bullet list
					</button>
					<button
						on:click={() => editor.chain().focus().toggleOrderedList().run()}
						style:background-color={editor.isActive('orderedList') ? activeColor : 'inherit'}
						class={buttonClass}
					>
						Ordered list
					</button>
				{/if}
			</div>
			<div class="justify-center font-bold text-xl text-center my-auto basis-1/3">Directions</div>
			<div class="basis-1/3" />
		</div>
	{/if}
	<div bind:this={element} class="m-1" />
</div>
