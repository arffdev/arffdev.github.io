<script lang="ts">
  import type TechStack from "$lib/models/techstack";
  export let title: string;
  export let tech_stacks: TechStack[];
</script>

<div class="title">
  {title}
</div>

<div id="scroll-wrapper" class="tech-stacks-wrapper">
  <div id="scroll-container" class="tech-stacks-container">
    {#each tech_stacks as ts}
      <div class="tech-stack" style="background-color: {ts.color}; border-color: {ts.borderColor}">
        <a target="_blank" href="{ts.link}">
          {ts.name}
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .title {
    color: #ffffff;
    font-weight: bold;
    font-size: 40px;
    margin: 20px 0;
  }

  .tech-stacks-wrapper {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .tech-stacks-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
    color: var(--text-color);
    width: 100%;
  }

  .tech-stacks-container::-webkit-scrollbar {
    display: none;
  }

  .tech-stack {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    margin: 5px;
    border: 3px solid gray;
    border-radius: 5px;
    padding: 5px;
    height: 30px;
    font-size: 16px;
    transition: ease-out 0.3s
  }

  .tech-stack a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  .tech-stack:hover {
    font-size: 30px;
    flex: 2 0 auto;
    height: 50px;
    border: 5px solid gray;
    transition: all 0.3s;
  }
</style>
