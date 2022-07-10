<script lang="ts">
  export let image: any;
  export let size: string = "300px"
</script>

<div class="profile-image-wrapper">
  <div class="profile-image-container">
    <img src={image} width={size} height={size} alt="profile" />
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
		width: 300px;
		height: 300px;
	}

	.profile-image-container img {
		background-color: var(--accent-color);
		border-radius: 50%;
		width: 300px;
		height: 300px;
	}
</style>