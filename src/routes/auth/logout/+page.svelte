<script lang="ts">
	import InputText from '../../../components/inputs/InputText.svelte';
	import SubmitButton from '../../../components/inputs/SubmitButton.svelte';
</script>

<form method="POST">
	<label for="username">Username</label>
	<InputText name="username" placeholder="username" />
	<label for="password">Password</label>
	<InputText name="password" placeholder="password" />
	<SubmitButton name="Login" />
</form>
