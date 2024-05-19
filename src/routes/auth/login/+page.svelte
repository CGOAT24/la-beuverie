<script lang="ts">
	import InputText from '../../../components/inputs/InputText.svelte';
	import SubmitButton from '../../../components/inputs/SubmitButton.svelte';
	import Row from '../../../components/Row.svelte';
</script>

<div class="flex flex-wrap flex-col justify-center items-center content-between h-full">
	<form method="POST">
		<Row>
			<InputText name="username" placeholder="username" />
		</Row>
		<Row>
			<InputText type="password" name="password" placeholder="password" />
		</Row>
		<Row>
			<SubmitButton name="Login" />
		</Row>
	</form>
	<a href="/auth/signup" class="mx-auto text-center w-full p-3 underline">Signup</a>
</div>
