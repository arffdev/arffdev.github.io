<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Animate from '$lib/Animate.svelte';
	import Projects from '$lib/components/projects/Projects.svelte';
	import { PROJECTS } from '$lib/constants';
</script>

<svelte:head>
	<title>Projects - ArffDev</title>
	<meta name="description" content="Projects I'm working on" />
</svelte:head>

<Animate>
	<Projects projects={PROJECTS} />
</Animate>

