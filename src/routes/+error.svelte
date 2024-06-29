<script lang="ts">
	import { page } from '$app/stores';
	import Row from '../components/Row.svelte';
	import Error from '../components/Error.svelte';

	const { status } = $page;
	let title: string;
	let message: string;

	switch (status) {
		case 401:
			title = 'Forbidden';
			message = 'You do not have access to this resource.';
			break;
		case 404:
			title = 'Not found';
			message = "The resource you're looking for doesn't exist.";
			break;
		case 500:
			title = 'Oops';
			message = 'Something broke on our end. Sorry about that!';
	}
</script>

<div class="flex justify-center">
	<div class="w-2/3 h-full">
		<Row>
			<Error {title} {message} />
		</Row>
	</div>
</div>
