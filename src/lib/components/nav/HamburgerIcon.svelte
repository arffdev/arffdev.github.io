<script lang="ts">
export let active: boolean = false;
</script>
  
<div class="menu-bar-container {active ? "active" : ""}">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
  
<style>
.menu-bar-container {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: var(--accent-color);
  margin: 6px 0;
  transition: 0.4s;
}

.active .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.active .bar2 {opacity: 0;}

.active .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
  