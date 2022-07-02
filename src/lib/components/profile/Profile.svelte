<script lang="ts">
  import type Link from "$lib/models/link";

  export let name: string;
  export let introduction: string;
  export let links: Link[] = [];
</script>

<div class="profile-container">
  <div class="profile-circle"></div>
</div>

{#if links.length > 0}
  <div class="links-container">
    {#each links as l}
      <a href={l.link}>{l.display}</a>
    {/each}
  </div>
{/if}

<div class="profile-description">
  <h1>{name}</h1>
  <p>
    {introduction}
  </p>
</div>

<style>
  .profile-container {
    display: flex;
    margin: 20px 0 10px 0;
  }

  .links-container {
    display: flex;
    flex-direction: row;
  }

  .links-container a {
    text-decoration: none;
    color: #ffffff;
    margin-right: 5px;
  }

  .profile-circle {
    background-color: lightgray;
    width: 200px;
    height: 200px;
    border: 5px gray solid;
    border-radius: 50%;
  }

  .profile-description {
    text-align: center;
    color: var(--text-color);
  }
</style>
