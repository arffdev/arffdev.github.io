<script lang="ts">
import { page } from '$app/stores';
import { accordion } from './accordian';
import SideNav from './SideNav.svelte';
import HamburgerIcon from './HamburgerIcon.svelte';

let width: number;
let show: boolean = false;

function toggleNav(): void {
	show = !show;
	console.log(show);
}
</script>

<svelte:window bind:innerWidth={width} />
{#if width <= 800}
	<header class="fancy-mobile-header">
		<a href="/">
			<img src="logo.png" width="50px" height="50px" alt="logo" />
		</a>
		<button on:click={toggleNav} class="menu-button">
			<HamburgerIcon active={show} />
		</button>
	</header>
	<nav use:accordion={show} class="fancy-mobile-nav">
		<a sveltekit:prefetch href="/about" on:click={toggleNav} class:active={$page.url.pathname === "/about"}>About</a>
		<a sveltekit:prefetch href="/skills" on:click={toggleNav} class:active={$page.url.pathname === "/skills"}>Experience & Skill</a>
		<a sveltekit:prefetch href="/projects" on:click={toggleNav} class:active={$page.url.pathname === "/projects"}>Projects</a>
		<a sveltekit:prefetch href="mailto:arffdevelopment@gmail.com">Get in Touch</a>
		<SideNav />
	</nav>
{:else}
	<header class="fancy-header">
		<a href="/">
			<img src="logo.png" width="100px" height="100px" alt="logo" />
		</a>
		<nav id="fancy-header" class="fancy-nav">
			<a sveltekit:prefetch href="/about" class:active={$page.url.pathname === "/about"}>About</a>
			<a sveltekit:prefetch href="/skills" class:active={$page.url.pathname === "/skills"}>Experience & Skill</a>
			<a sveltekit:prefetch href="/projects" class:active={$page.url.pathname === "/projects"}>Projects</a>
			<a sveltekit:prefetch href="mailto:arffdevelopment@gmail.com">Get in Touch</a>
		</nav>
	</header>
{/if}

<style>
	.fancy-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.fancy-mobile-header {
		display: flex;
		background-color: var(--secondary-color);
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.fancy-mobile-nav {
		display: flex;
		height: 100px;
		flex-direction: column;
		align-items: center;
		background-color: var(--secondary-color);
		height: auto;
	}

	.fancy-mobile-nav a {
		display: inline-block;
		padding: 10px;
		color: var(--tertiary-color);
		text-decoration: none;
		font-size: 16px;
		font-weight: 400;
	}

	.fancy-mobile-nav a.active {
		color: var(--accent-color);
	}

	.fancy-mobile-header .menu-button {
		background: none;
		border: none;
		color: var(--accent-color);
		padding: 10px;
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
