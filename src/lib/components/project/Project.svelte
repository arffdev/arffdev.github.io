<script lang="ts">
import type Project from "$lib/models/project";
import CircleImage from "../display/CircleImage.svelte";

export let project: Project;
</script>

<div class="project-container">
  {#if project.imagePath}
    <CircleImage image={project.imagePath} hasBackgroundColor={false} />
  {/if}
  <div class="details-container">
    <div class="details">
      <h1 class="title">{project.name}</h1>
      <ul>
        {#if project.description}
          <li>{project.description}</li>
        {/if}
        {#if project.history}
          <li>{project.history}</li>
        {/if}
        {#if project.status}
          <li>{project.status}</li>
        {/if}
      </ul>
    </div>
    <a href="{project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
</div>

<style>
  .project-container {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .details-container {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1 300px
  }

  .details-container .details {
    padding-bottom: 20px;
  }

  .project-container .details .title {
    display: block;
    text-decoration: none;
    color: var(--tertiary-color);
    font-size: 20px;
    font-weight: 700;
  }

  .details ul {
    margin: 0;
    padding: 0 1em;
    list-style: none;
  }

  .details li {
    color: var(--tertiary-color);
  }

  .details li::before {
    content: "";
    border-color: transparent var(--accent-color);;
    border-style: solid;
    border-width: 0.25em 0 0.25em 0.35em;
    display: block;
    height: 0;
    width: 0;
    left: -1em;
    top: 0.8em;
    position: relative;
  }

  .details-container a {
    border: 2px solid var(--accent-color);
		border-radius: 4px;
		color: var(--accent-color);
		text-decoration: none;
		padding: 10px 30px;
		font-size: 16px;
  }
</style>
