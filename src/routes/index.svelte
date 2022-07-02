<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Profile from '$lib/components/profile/Profile.svelte';
	import TechStacks from '$lib/components/techstacks/TechStacks.svelte';
	import { PROFILE_LINKS, TECH_STACKS, CODE_STACKS, BACKEND_SERVICES, LEARNING_MATERIAL } from '$lib/constants';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="My Portfolio" />
</svelte:head>

<section id="me" style="padding-top: 50px;">
	<Profile name="Coby Arff" introduction="Software Engineer that works on some fun things on the side." links={PROFILE_LINKS}/>
</section>

<section id="experience">
	<TechStacks title="Frameworks" tech_stacks={TECH_STACKS} size="large" />
	<TechStacks title="Programming Languages" tech_stacks={CODE_STACKS} size="medium" />
	<TechStacks title="Backend Services" tech_stacks={BACKEND_SERVICES} size="medium" />
	<TechStacks title="Learning" tech_stacks={LEARNING_MATERIAL} size="small" />
</section>

<section id="projects">
	PROJECTS
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
