<script lang="ts">
  import type Qualification from "$lib/models/qualification";

  export let id: string;
  export let qualifications: Qualification[];
  let scrollPercent: number = 0;

	function updateScrollProgress(_event: any) {
    console.log("test1: ", document.documentElement);
		const h = document.getElementById(`${id}-fancy-list`); 
		const b = document.body;
		const st = 'scrollTop';
	  const sh = 'scrollHeight';
    console.log("scrollPercent: ", scrollPercent);
    if (h && b) {
      scrollPercent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
      console.log("scrollPercent: ", scrollPercent);
    }
	}

  function calculateScrollPercent(index: number, listLength: number): number {
    if (index === 0) {
      return 0;
    } else if (index === listLength - 1) {
      return 100;
    }
    console.log("test: ", (index) / (listLength - 1));
    return (index / (listLength - 1)) * 100;
  }

  function scrollToItem(id: string): void {
    document.getElementById(id)?.scrollIntoView();
  }
</script>

<div class="fancy-list">
  <div class="fancy-nav">
    {#each qualifications as item, i}
      <button class:active={scrollPercent === calculateScrollPercent(i, qualifications.length)} on:click={() => scrollToItem(`${item.name}-${i}`)}>{item.name}</button>
    {/each}
  </div>
  <div id="{id}-fancy-list" class="fancy-content-list" on:scroll={updateScrollProgress}>
    {#each qualifications as item, i}
      <div id="{item.name}-{i}" class="list-item">
        {#if item.title}
          <div class="title">{item.title}</div>
        {/if}
        {#if item.date}
          <div class="date">{item.date}</div>
        {/if}
        {#if item.skills.length > 0}
          <ul class="skills">
            {#each item.skills as skill}
              <li>
                <a href="{skill.link}">{skill.name}</a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary-color); 
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--accent-color); 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  .fancy-list {
    display: flex;
    flex-direction: row;
  }

  .fancy-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .fancy-nav button {
    display: block;
    text-decoration: none;
		color: var(--tertiary-color);
    border: none;
    background: none;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .fancy-nav button.active {
		color: var(--accent-color);
  }

  .fancy-content-list {
		height: 300px;
		color: var(--pure-white);
		direction: rtl;
		text-align: left;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
  	scroll-behavior: smooth;
	}

	.fancy-content-list .list-item {
		min-height: 300px;
    padding-left: 30px;
		scroll-snap-align: start;
	}

  .list-item .title {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 15px;
  }

  .list-item .date {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 15px;
    color: var(--tertiary-color);
  }

  .list-item .skills a {
    text-decoration: none;
    font-weight: 500;
    color: var(--tertiary-color);
    margin-right: 40px;
  }

  .list-item ul.skills {
		direction: ltr;
    margin: 0;
    padding: 0 1em;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .skills li::before {
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
    min-width: 100px;
  }
</style>
