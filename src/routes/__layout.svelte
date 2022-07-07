<script lang="ts">
	import Header from '$lib/components/nav/Header.svelte';
	import SideNav from '$lib/components/nav/SideNav.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<SideNav />
	<div class="content">
		<slot />
	</div>
</main>

<style>
	main {
		/* TODO: lets setup grid instead of flex it will make the header and side nav better */
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	main .content {
		width: 100%;
		padding: 0 10px;
	}
</style>
