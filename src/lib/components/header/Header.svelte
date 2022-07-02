<script lang="ts">
	import { page } from '$app/stores';

	let lineCss: string = ``;

	function updateScrollProgress(_event: any) {
		const h = document.documentElement, 
					b = document.body,
					st = 'scrollTop',
					sh = 'scrollHeight';
    const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
		lineCss = `width: ${percent < 5 ? 5 : percent}%;`
		console.log($page.url);
	}

	updateScrollProgress(null);
</script>

<svelte:window on:scroll={updateScrollProgress} />

<header class="fancy-header">
	<nav id="fancy-header" class="fancy-nav">
		<a href="#me">Me</a>
		<a href="#experience">experience</a>
		<a href="#projects">projects</a>
	</nav>
	<div style={lineCss} class="progress-line" ></div>
</header>

<style>
	.fancy-header {
		position: fixed;
		width: 100%;
		background-color: var(--secondary-color);;
	}

	.fancy-nav {
		padding: 10px 0 5px 0;
		text-align: center;
	}

	.fancy-nav a {
		display: inline-block;
		padding: 0 10px;
		color: var(--pure-white);
		text-decoration: none;
		font-size: 1.2em;
		text-transform: uppercase;
		font-weight: 500;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}

	.fancy-nav a:hover {
		color: var(--accent-color);
	}

	.progress-line {
		height: 6px;
		background: #ffff00;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}
</style>
