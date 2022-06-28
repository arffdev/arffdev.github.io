<script lang="ts">
  const MIN_INDEX = 0;
  const MAX_INDEX = 7;
	let index = 0;

  function left() {
    return index === MIN_INDEX ? MIN_INDEX : index -= 1;
  }

  function right() {
    return index === MAX_INDEX ? MAX_INDEX : index += 1;
  }
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

<div class="tech-stacks-wrapper">
  <button class="tech-stack-button" on:click={left}>left</button>
  <div class="tech-stacks-container">
    <!-- TODO: WILL CREATE A DYNAMIC LIST FOR THIS LATER -->
    <div class="tech-stack" class:active={index === 0}>
      TEST 1
    </div>
    <div class="tech-stack" class:active={index === 1}>
      TEST 2
    </div>
    <div class="tech-stack" class:active={index === 2}>
      TEST 3
    </div>
    <div class="tech-stack" class:active={index === 3}>
      TEST 4
    </div>
    <div class="tech-stack" class:active={index === 4}>
      TEST 5
    </div>
    <div class="tech-stack" class:active={index === 5}>
      TEST 6
    </div>
    <div class="tech-stack" class:active={index === 6}>
      TEST 7
    </div>
    <div class="tech-stack" class:active={index === 7}>
      TEST 8
    </div>
  </div>
  <button class="tech-stack-button" on:click={right}>right</button>
</div>

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

  /********** Tech Stacks wrapper will move to it's own component ***********/
  .tech-stacks-wrapper {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  
  .tech-stacks-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    color: var(--text-color);
    margin: 10px;
    max-width: 300px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .tech-stacks-container::-webkit-scrollbar {
    display: none;
  }

  .tech-stack {
    flex: 0 0 auto; /* adjust this instead for active */
    margin-right: 10px;
    border: 1px solid gray;
    padding: 10px;
    width: 100px;
    font-size: 16px;
    text-align: center;
  }

  .tech-stack:first-child {
    margin-left: 100px;
  }

  .tech-stack:last-child {
    margin-right: 100px;
  }

  .tech-stack.active {
    scroll-snap-align: center;
    /* width: 150px; */
    font-size: 20px;
  }
</style>
