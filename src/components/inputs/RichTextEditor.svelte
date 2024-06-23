<script lang="ts">
	import { Editor } from '@tiptap/core';
	import { onMount } from 'svelte';
	import { StarterKit } from '@tiptap/starter-kit';
	import RichTextEditorButton from './RichTextEditorButton.svelte';
	import type { RichTextEditorButtonProps } from '../../../app';

	export let value = '';

	let element: Element;
	let editor: Editor;
	let editorOptions: RichTextEditorButtonProps[];

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: value,
			onTransaction: () => {
				editor = editor;
			}
		});

		editorOptions = [
			{
				name: 'Bold',
				active: editor.isActive('bold'),
				onClick: function () {
					this.active = editor.isActive('bold');
				}
			},
			{
				name: 'Italic',
				active: editor.isActive('italic'),
				onClick: function () {
					editor.chain().focus().toggleItalic().run();
					this.active = editor.isActive('italic');
					console.log(this.active);
				}
			},
			{
				name: 'Strike',
				onClick: () => editor.chain().focus().toggleStrike().run()
			},
			{
				name: 'Bullet list',
				onClick: () => editor.chain().focus().toggleBulletList().run()
			},
			{
				name: 'Ordered list',
				onClick: () => editor.chain().focus().toggleOrderedList().run()
			}
		];
	});
</script>

<div class="border-black shadow-[4px_4px_0px_1px_#12110F] border-2 rounded">
	{#if editor}
		<div class="border-black border-b-2 py-2 px-4">
			<button
				on:click={() => editor.chain().focus().toggleBold().run()}
				style:background-color={editor.isActive('bold') ? '#00FF00' : 'inherit'}
				class="border-black border-2 rounded shadow-small p-2 mx-2"
			>
				Bold
			</button>
		</div>
	{/if}
	<div bind:this={element} />
</div>

<style>
	button.active {
		background-color: #00ff00;
	}
</style>
