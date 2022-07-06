<script lang="ts">
	import github from "$lib/assets/github.png"
	import itchio from "$lib/assets/itchio.png"
	import linkedIn from "$lib/assets/linkedIn.png"
</script>

<div class="side-nav">
  <a href="https://github.com/arffdev" target="_blank" rel="noopener noreferrer">
    <img src={github} width="30px" height="30px" alt="GitHub" style="padding-bottom: 30px;" />
  </a>
  <a href="https://pugdev.itch.io/" target="_blank" rel="noopener noreferrer">
    <img src={itchio} width="30px" height="30px" alt="itch.io" style="padding-bottom: 20px;" />
  </a>
  <a href="https://www.linkedin.com/in/coby-arff-12a675139/" target="_blank" rel="noopener noreferrer">
    <img src={linkedIn} width="50px" height="50px" alt="LinkedIn" style="padding-bottom: 30px;" />
  </a>
</div>

<style>
  .side-nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    min-width: 100px;
  }
</style>
