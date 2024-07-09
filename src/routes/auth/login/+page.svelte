<script lang="ts">
	import InputText from '../../../components/inputs/InputText.svelte';
	import SubmitButton from '../../../components/inputs/SubmitButton.svelte';
	import Row from '../../../components/Row.svelte';
	import { writable } from 'svelte/store';
	import ValidatedInput from '../../../components/inputs/ValidatedInput.svelte';

	export let form;
	const errors = writable<Record<string, string[]>>(form?.errors ?? {});
</script>

<div class="flex flex-wrap flex-col justify-center items-center content-between h-full">
	<form method="POST">
		<Row>
			<ValidatedInput errors={$errors.username}>
				<InputText name="username" placeholder="username" />
			</ValidatedInput>
		</Row>
		<Row>
			<ValidatedInput errors={$errors.password}>
				<InputText type="password" name="password" placeholder="password" />
			</ValidatedInput>
		</Row>
		<Row>
			<SubmitButton name="Login" />
		</Row>
	</form>
	<a href="/auth/signup" class="mx-auto text-center w-full p-3 underline">Signup</a>
</div>
