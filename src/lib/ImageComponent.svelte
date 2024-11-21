<script lang="ts">
	interface Props {
		href?: string;
		title?: string;
		text?: string;
	}

	const { href = '', title = undefined, text = '' }: Props = $props();
</script>

<img src={href} {title} alt={text} />

<style>
	img {
		border: 3px solid var(--pico-primary);
		border-radius: 9px;
	}

	img:hover {
		box-shadow: -2px -1px 20px 3px #e485006b;
	}
</style>
