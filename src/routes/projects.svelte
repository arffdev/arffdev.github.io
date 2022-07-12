<script context="module" lang="ts">
export const prerender = true;
</script>

<script lang="ts">
import Animate from '$lib/Animate.svelte';
import Project from '$lib/components/project/Project.svelte';
import { PROJECTS } from '$lib/constants';
</script>

<svelte:head>
	<title>Projects - ArffDev</title>
	<meta name="description" content="Projects I'm working on" />
</svelte:head>

<Animate>
	<div class="projects-container">
		<h1 class="title">Projects</h1>
		<div class="subtext">
			I have a lot of different side projects I'm working on but the ones listed below on the main ones I work on and maintain.
		</div>
		{#each PROJECTS as project}
			<Project project={project} />
		{/each}
	</div>
</Animate>

<style>
	.projects-container {
    display: flex;
    flex-flow: column;
		flex-direction: column;
		align-items: flex-start;
    width: 100%;
  }

  .projects-container h1 {
		color: var(--accent-color);
		font-size: 40px;
		font-weight: 700;
		border-top: 1px solid var(--accent-color);
		padding: 10px;
		margin-bottom: 20px;
  }

  .projects-container .subtext {
    color: var(--tertiary-color);
		font-size: 20px;
		font-weight: 400;
  }
</style>