<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Animate from '$lib/Animate.svelte';
	import TechStacks from '$lib/components/techstacks/TechStacks.svelte';
	import { TECH_STACKS, CODE_STACKS, BACKEND_SERVICES, LEARNING_MATERIAL } from '$lib/constants';
</script>

<svelte:head>
	<title>Skills</title>
	<meta name="description" content="Skills & Experience" />
</svelte:head>

<Animate>
	<TechStacks title="Frameworks" tech_stacks={TECH_STACKS} size="large" />
	<TechStacks title="Programming Languages" tech_stacks={CODE_STACKS} size="medium" />
	<TechStacks title="Backend Services" tech_stacks={BACKEND_SERVICES} size="medium" />
	<TechStacks title="Learning" tech_stacks={LEARNING_MATERIAL} size="small" />
</Animate>

