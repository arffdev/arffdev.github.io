<script context="module" lang="ts">
export const prerender = true;
</script>

<script lang="ts">
import Animate from '$lib/Animate.svelte';
</script>

<svelte:head>
	<title>ArffDev</title>
	<meta name="description" content="Home page" />
</svelte:head>

<Animate>
	<div class="profile-container">
		<p class="hello">Hello my name is,</p>
		<h1 class="name">Coby Arff.</h1>
		<p class="subtext">Software Engineer that works on some fun things on the side.</p>
		<p class="introduction">
			I was in college for about 7 years, because like most people I didn't really know what I wanted to do with my life. 
			I just focused on classes I liked, which at the time was <strong>Psychology</strong>. After about 3 years of working 
			towards a Psychology degree I decided it wasn't for me and took a chance on getting a <strong>Computer Science</strong> degree. 
			I ended up graduating with both.
		</p>
		<a class="email" href="mailto:arffdevelopment@gmail.com">Say Hello!</a>
	</div>
</Animate>

<style>
	.profile-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.profile-container .hello {
		color: var(--accent-color);
		font-weight: 400px;
		font-size: 20px;
	}

	.profile-container .name {
		color: var(--text-color);
		font-weight: 700;
		font-size: 80px;
		margin: 0;
	}

	.profile-container .subtext {
		color: var(--tertiary-color);
		font-weight: 700;
		font-size: 40px;
		margin: 0;
	}
	
	.profile-container .introduction {
		color: var(--tertiary-color);
		font-weight: 400;
		font-size: 16px;
		margin: 40px 0;
	}

	.profile-container .introduction strong {
		color: var(--accent-color);
		font-weight: 700;
	}

	.profile-container .email {
		border: 2px solid var(--accent-color);
		border-radius: 4px;
		color: var(--accent-color);
		text-decoration: none;
		padding: 10px 30px;
		font-size: 16px;
	}
</style>