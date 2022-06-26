<script lang="ts">
	// import Fa from 'svelte-fa'
	// import { faCodeCompare } from '@fortawesome/free-solid-svg-icons'
	import { page } from '$app/stores';
</script>

<header class="fancy-header">
	<nav class="fancy-nav">
		<a href="#" class:active={$page.url.pathname === '/'}>Me</a>
		<a href="#" class:active={$page.url.pathname === '/projects'}>projects</a>
    <div class="line"></div>
	</nav>
</header>

<style>
	.fancy-header {
		/* position: fixed;
		width: 100%; */
		display: flex;
		justify-content: center;
		background-color: var(--secondary-color);;
	}

	.fancy-nav {
		padding: 10px 0 5px 0;
		text-align: center;
	}

	.fancy-nav a {
		color: var(--pure-white);
		text-decoration: none;
		font-size: 1.2em;
		text-transform: uppercase;
		font-weight: 500;
		display: inline-block;
		width: 80px;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}

	.fancy-nav a:hover {
		color: var(--pure-white);
	}

	.fancy-nav a.active {
		color: var(--accent-color);
	}

	.fancy-nav .line {
		width: 50%;
		height: 6px;
		background: #ffff00;
		opacity: 0;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}

	.fancy-nav a.active ~ .line {
		opacity: 1;
	}

	.fancy-nav a:nth-child(1):hover ~ .line {
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
		opacity: 1;
	}

	.fancy-nav a:nth-child(2):hover ~ .line {
		-webkit-transform: translateX(100%);
		transform: translateX(100%);
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
		opacity: 1;
	}

</style>
