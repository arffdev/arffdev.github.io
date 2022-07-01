<script lang="ts">
  import { TECH_STACKS, CODE_STACKS_0, CODE_STACKS_1 } from "$lib/constants";
  import TechStacks from "../techstacks/TechStacks.svelte";
</script>

<div class="profile-container">
  <div class="profile-circle"></div>
</div>

<div class="profile-description">
  <h1>Coby Arff</h1>
  <p>
    Software Engineer that works on some fun things on the side.
  </p>
</div>

<TechStacks title="Frameworks" tech_stacks={TECH_STACKS} />
<TechStacks title="Code Familiarity" tech_stacks={CODE_STACKS_0} />
<TechStacks title="Want learn more of..." tech_stacks={CODE_STACKS_1} />

<style>
  .profile-container {
    display: flex;
    margin: 20px 0 10px 0;
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
