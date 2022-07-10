<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Animate from '$lib/Animate.svelte';
	import profile from "$lib/assets/profile.png"
import CircleImage from '$lib/components/display/CircleImage.svelte';
</script>

<svelte:head>
	<title>About - ArffDev</title>
	<meta name="description" content="About me" />
</svelte:head>

<Animate>
	<div class="about-wrapper">
		<div class="about-container">
			<div class="title">About Me</div>
			<p class="intro">
				I started college as a <strong>Psychology</strong> student but only because I never really knew what 
				I wanted to do and I just thought the field of Psychology was cool. I continued to study Psychology
				for the next 3 years. After entering my senior year I realized that continuing on to get my masters
				in counseling/therapy was not something I wanted to do. Fortunately, I had a variety of relationships
				and connections that put me towards the path of getting a <strong>Computer Science</strong> degree. 
			</p>
			<p class="intro">
				After my first couple <strong>CS</strong> courses I started to really love it. Even though I knew I
				wasn't very good at it (yet) I could see a future in the field. One of my most influential moments was
				taking my homework to a professor knowing I was close to solving it but not seeing the issue I was having.
				He looked at it for a total of 5 seconds and changed a <strong>&lt</strong> to <strong>&gt</strong> and I 
				said <strong>"You're smart"</strong> to which he replied <strong>"No, I've just made more mistakes then you".</strong>
				After that, I was far less afraid of making mistakes as it's just part of growing in your field.
			</p>
		</div>
		<CircleImage image={profile} />
	</div>
</Animate>

<style>
	.about-wrapper {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
	}

	.profile-image-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.profile-image-container {
		text-align: center;
		border: 8px solid var(--accent-color);
		padding: 20px;
		border-radius: 50%;
		width: 300px;
		height: 300px;
	}

	.profile-image-container img {
		background-color: var(--accent-color);
		border-radius: 50%;
		width: 300px;
		height: 300px;
	}

	.about-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.about-container .title {
		color: var(--accent-color);
		font-size: 40px;
		font-weight: 700;
		border-top: 1px solid var(--accent-color);
		padding: 10px;
	}

	.about-container .intro {
		color: var(--tertiary-color);
	}

	.about-container .intro strong {
		color: var(--accent-color);
	}
</style>