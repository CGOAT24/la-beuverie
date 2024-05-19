<script lang="ts">
	import Row from '../../../components/Row.svelte';
	import InputText from '../../../components/inputs/InputText.svelte';
	import SubmitButton from '../../../components/inputs/SubmitButton.svelte';
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
			<SubmitButton name="Signup" />
		</Row>
	</form>
	<a href="/auth/login" class="mx-auto text-center w-full p-3 underline">Login</a>
</div>
