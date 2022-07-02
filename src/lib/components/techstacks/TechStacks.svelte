<script lang="ts">
  import type TechStack from "$lib/models/techstack";
  export let title: string;
  export let tech_stacks: TechStack[];
  export let size: string = "large";
</script>

<div class="title {size}">
  {title}
</div>

<div id="scroll-wrapper" class="tech-stacks-wrapper">
  <div id="scroll-container" class="tech-stacks-container">
    {#each tech_stacks as ts}
      <div class="tech-stack {size}" style="background-color: {ts.color}; border-color: {ts.borderColor}">
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
    margin: 20px 0;
    text-align: center;
  }

  .title.large {
    font-size: 40px;
  }

  .title.medium {
    font-size: 30px;
  }

  .title.small {
    font-size: 20px;
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
    padding: 5px;
    transition: ease-out 0.1s
  }

  .tech-stack.large {
    height: 30px;
    border: 4px solid;
    border-radius: 5px;
    font-size: 20px;
  }

  .tech-stack.medium {
    height: 20px;
    border: 3px solid;
    border-radius: 5px;
    font-size: 18px;
  }

  .tech-stack.small {
    height: 15px;
    border: 3px solid;
    border-radius: 5px;
    font-size: 16px;
  }

  .tech-stack a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  .tech-stack:hover, .tech-stack:active {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    transition: all 0.2s;
  }
</style>
