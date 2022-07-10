<script lang="ts">
	import Header from '$lib/components/nav/Header.svelte';
	import SideNav from '$lib/components/nav/SideNav.svelte';
	import '../app.css';
</script>

<main>
	<div class="topbar">
		<Header />
	</div>
	<div class="sidebar">
		<SideNav />
	</div>
	<div class="content">
		<slot />
	</div>
</main>

<style>
	/* TODO: do a media calculation for mobile */
	main {
		display: grid;
		grid-template-areas: 
			"topbar topbar"
			"sidebar content"
			"sidebar footer"; /* TODO: probably don't need the footer */
		height: 100vh;
  	grid-template-columns: 100px auto;
	}

	.topbar {
		grid-area: topbar;
	}

	.sidebar {
		grid-area: sidebar;
		width: 100px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.content {
		grid-area: content;
		width: 100%;
	}
</style>
