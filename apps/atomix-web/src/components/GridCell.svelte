<script lang="ts">
	import type { MouseEventHandler } from "svelte/elements";

  export let gridX = 1;
  export let gridY = 1;
  export let backgroundColor = "";
  export let outlineColor = "";
  export let hoverEffects = false;
  export let onClick: MouseEventHandler<HTMLElement> = () => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="
    group w-[5.6rem] h-[5.75rem] px-1 py-0.5 outline outline-1 rounded-md
    backdrop-blur-sm bg-opacity-50 transition-all duration-150 ease-in-out
    {hoverEffects
      ? "hover:cursor-pointer hover:bg-opacity-70 hover:scale-[135%] hover:z-10"
      : ""}
    {backgroundColor} {outlineColor}
  "
  style="grid-row: {gridY}; grid-column: {gridX};"
  on:click={onClick}
>
  <slot />
</div>
