<script lang="ts">
export let image: string;
export let hasBackgroundColor: boolean = true;
</script>

<div class="profile-image-wrapper">
  <div class="profile-image-container">
    <img src={image} style="{hasBackgroundColor ? "background-color: var(--accent-color);" : ""}" alt="profile" />
  </div>
</div>

<style>
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
		width: 200px;
		height: 200px;
	}

	.profile-image-container img {
		border: 2px solid var(--accent-color);
		border-radius: 50%;
		width: 200px;
		height: 200px;
	}

	@media only screen and (max-width: 800px) {
		.profile-image-container {
			width: 150px;
			height: 150px;
		}

		.profile-image-container img {
			width: 150px;
			height: 150px;
		}
	}
</style>