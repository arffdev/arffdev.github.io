<script lang="ts">
  import type Project from "$lib/models/project";

  export let projects: Project[];
</script>

<div class="projects-container">
  <h1>Projects</h1>
  <div class="subtext">
    I have a lot of different side projects I'm working on but the ones listed below on the main ones I work on and maintain.
  </div>
  {#each projects as pr}
    <div class="project">
      <a href="{pr.projectLink}" class="title">{pr.name}</a>
      <div class="description">
        {pr.description}
      </div>
      {#if pr.history}
        <div class="description">
          {pr.history}
        </div>
      {/if}
      <div class="status">
        {pr.status}
      </div>
    </div>
  {/each}
</div>

<style>
  .projects-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    align-content: space-between;
    width: 100%;
  }

  .projects-container h1 {
    color: var(--pure-white);
    font-weight: bold;
    font-size: 40px;
    text-align: center;
  }

  .projects-container .subtext {
    color: var(--pure-white);
  }

  .project {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 500px;
    border: 1px solid var(--pure-white);
    background-color: #4C5468;
    color: var(--pure-white);
    border-radius: 5px;
    padding: 10px;
  }

  .project .title {
    display: block;
    text-decoration: none;
    color: var(--pure-white);
    font-size: 20px;
  }

  .project .description {
    margin-top: 10px;
  }

  .project .status {
    margin-top: 10px;
  }
</style>
