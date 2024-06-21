<script>
	import { Color } from '@tiptap/extension-color';
	import ListItem from '@tiptap/extension-list-item';
	import TextStyle from '@tiptap/extension-text-style';
	import StarterKit from '@tiptap/starter-kit';
	import { Editor } from '@tiptap/core';
	import { onMount } from 'svelte';

	let element;
	let editor;
	export let content = '';

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				Color.configure({ types: [TextStyle.name, ListItem.name] }),
				TextStyle.configure({ types: [ListItem.name] }),
				StarterKit
			],
			content: content,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});
	});
</script>

<div class="">
	{#if editor}
		<div class="control-group border-2 border-black border-collapse">
			<div class="button-group">
				<button
					on:click={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					class={editor.isActive('bold') ? 'is-active' : ''}
				>
					Bold
				</button>
				<button
					on:click={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					class={editor.isActive('italic') ? 'is-active' : ''}
				>
					Italic
				</button>
				<button
					on:click={() => editor.chain().focus().toggleStrike().run()}
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					class={editor.isActive('strike') ? 'is-active' : ''}
				>
					Strike
				</button>
				<button
					on:click={() => editor.chain().focus().toggleCode().run()}
					disabled={!editor.can().chain().focus().toggleCode().run()}
					class={editor.isActive('code') ? 'is-active' : ''}
				>
					Code
				</button>
				<button on:click={() => editor.chain().focus().unsetAllMarks().run()}>Clear marks</button>
				<button on:click={() => editor.chain().focus().clearNodes().run()}>Clear nodes</button>
				<button
					on:click={() => editor.chain().focus().setParagraph().run()}
					class={editor.isActive('paragraph') ? 'is-active' : ''}
				>
					Paragraph
				</button>
				<button
					on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
					class={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
				>
					H1
				</button>
				<button
					on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
					class={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
				>
					H2
				</button>
				<button
					on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
					class={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
				>
					H3
				</button>
				<button
					on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
					class={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
				>
					H4
				</button>
				<button
					on:click={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
					class={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
				>
					H5
				</button>
				<button
					on:click={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
					class={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
				>
					H6
				</button>
				<button
					on:click={() => editor.chain().focus().toggleBulletList().run()}
					class={editor.isActive('bulletList') ? 'is-active' : ''}
				>
					Bullet list
				</button>
				<button
					on:click={() => editor.chain().focus().toggleOrderedList().run()}
					class={editor.isActive('orderedList') ? 'is-active' : ''}
				>
					Ordered list
				</button>
				<button
					on:click={() => editor.chain().focus().toggleCodeBlock().run()}
					class={editor.isActive('codeBlock') ? 'is-active' : ''}
				>
					Code block
				</button>
				<button
					on:click={() => editor.chain().focus().toggleBlockquote().run()}
					class={editor.isActive('blockquote') ? 'is-active' : ''}
				>
					Blockquote
				</button>
				<button on:click={() => editor.chain().focus().setHorizontalRule().run()}>
					Horizontal rule
				</button>
				<button on:click={() => editor.chain().focus().setHardBreak().run()}>Hard break</button>
				<button
					on:click={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().chain().focus().undo().run()}
				>
					Undo
				</button>
				<button
					on:click={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().chain().focus().redo().run()}
				>
					Redo
				</button>
				<button
					on:click={() => editor.chain().focus().setColor('#958DF1').run()}
					class={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
				>
					Purple
				</button>
			</div>
		</div>
	{/if}
	<div bind:this={element} class="border-2 border-black border-collapse" />
</div>

<style lang="scss">
	/* Basic editor styles */
	.tiptap {
		:first-child {
			margin-top: 0;
		}

		/* List styles */
		ul,
		ol {
			padding: 0 1rem;
			margin: 1.25rem 1rem 1.25rem 0.4rem;

			li p {
				margin-top: 0.25em;
				margin-bottom: 0.25em;
			}
		}

		/* Heading styles */
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			line-height: 1.1;
			margin-top: 2.5rem;
			text-wrap: pretty;
		}

		h1,
		h2 {
			margin-top: 3.5rem;
			margin-bottom: 1.5rem;
		}

		h1 {
			font-size: 1.4rem;
		}

		h2 {
			font-size: 1.2rem;
		}

		h3 {
			font-size: 1.1rem;
		}

		h4,
		h5,
		h6 {
			font-size: 1rem;
		}

		/* Code and preformatted text styles */
		code {
			background-color: var(--purple-light);
			border-radius: 0.4rem;
			color: var(--black);
			font-size: 0.85rem;
			padding: 0.25em 0.3em;
		}

		pre {
			background: var(--black);
			border-radius: 0.5rem;
			color: var(--white);
			font-family: 'JetBrainsMono', monospace;
			margin: 1.5rem 0;
			padding: 0.75rem 1rem;

			code {
				background: none;
				color: inherit;
				font-size: 0.8rem;
				padding: 0;
			}
		}

		blockquote {
			border-left: 3px solid var(--gray-3);
			margin: 1.5rem 0;
			padding-left: 1rem;
		}

		hr {
			border: none;
			border-top: 1px solid var(--gray-2);
			margin: 2rem 0;
		}
	}
</style>
