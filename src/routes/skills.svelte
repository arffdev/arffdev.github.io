<script context="module" lang="ts">
export const prerender = true;
</script>

<script lang="ts">
import Animate from '$lib/Animate.svelte';
import FancyList from '$lib/components/list/FancyList.svelte';
import { EXPERIENCE, SKILLS } from '$lib/constants';
</script>

<svelte:head>
	<title>Skills - ArffDev</title>
	<meta name="description" content="Skills & Experience" />
</svelte:head>

<Animate>
	<div class="skills-wrapper">
		<div class="title">Experience & Skills</div>
		<div class="skills-container">
			<div class="skill">
				<div class="title">Where I've worked</div>
				<FancyList id="experience" qualifications={EXPERIENCE} />
			</div>
			<div class="skill">
				<div class="title">What I know</div>
				<FancyList id="skills" qualifications={SKILLS}/>
			</div>
		</div>
	</div>
</Animate>

<style>
	.skills-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.skills-wrapper .title {
		color: var(--accent-color);
		font-size: 40px;
		font-weight: 700;
		border-top: 1px solid var(--accent-color);
		padding: 10px;
		margin-bottom: 20px;
	}

	.skills-container {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		width: 100%;
	}

	.skill {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.skill .title {
		color: var(--tertiary-color);
		border: none;
		font-size: 32px;
		font-weight: 700;
	}
</style>