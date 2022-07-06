<script>
  import { slide } from 'svelte/transition'
</script>

<section transition:slide>
  <slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>