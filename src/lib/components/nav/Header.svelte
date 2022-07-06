<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="fancy-header">
	<a href="/">
		<img src="src\lib\assets\logo.png" width="100px" height="100px" alt="logo" />
	</a>
	<nav id="fancy-header" class="fancy-nav">
		<a sveltekit:prefetch href="/about" class:active={$page.url.pathname === "/about"}>About</a>
		<a sveltekit:prefetch href="/skills" class:active={$page.url.pathname === "/skills"}>Experience & Skill</a>
		<a sveltekit:prefetch href="/projects" class:active={$page.url.pathname === "/projects"}>Projects</a>
		<a sveltekit:prefetch href="/contact" class:active={$page.url.pathname === "/contact"}>Get in Touch</a>
	</nav>
</header>

<style>
	.fancy-header {
		position: fixed;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* background-color: var(--primary-color); */
	}

	.fancy-nav {
		display: flex;
		text-align: center;
	}

	.fancy-nav a {
		display: inline-block;
		padding: 0 10px;
		color: var(--tertiary-color);
		text-decoration: none;
		font-size: 16px;
		font-weight: 400;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}

	.fancy-nav a.active {
		color: var(--accent-color);
	}

	.fancy-nav a:hover {
		color: var(--accent-color);
	}
</style>
