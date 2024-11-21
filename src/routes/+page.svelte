<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import ImageComponent from '$lib/ImageComponent.svelte';

	const { data }: { data: PageData } = $props();
</script>

<div>
	<SvelteMarkdown source={data.mdText} renderers={{ image: ImageComponent }} />
</div>

<style>
	div {
		max-width: 900px;
		margin: 5rem auto;
	}
</style>
