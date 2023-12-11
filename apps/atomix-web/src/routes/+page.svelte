<script lang="ts">
  import { ElementCategory, elements } from "$lib/periodic-table";
	import GridCell from "../components/GridCell.svelte";

  const setBackgroundColor = (category: ElementCategory) => {
    switch(category) {
      case ElementCategory.Actinide:
        return "bg-teal-700";
      case ElementCategory.AlkaliMetal:
        return "bg-red-700";
      case ElementCategory.AlkalineEarthMetal:
        return "bg-violet-700";
      case ElementCategory.Halogen:
        return "bg-orange-700";
      case ElementCategory.Lanthanide:
        return "bg-cyan-700";
      case ElementCategory.Metalloid:
        return "bg-lime-700";
      case ElementCategory.NobleGas:
        return "bg-amber-700"
      case ElementCategory.Nonmetal:
        return "bg-yellow-600";
      case ElementCategory.PostTransitionMetal:
        return "bg-green-700";
      case ElementCategory.TransitionMetal:
        return "bg-blue-700";
    }
  };

  const setOutlineColor = (category: ElementCategory) => {
    switch(category) {
      case ElementCategory.Actinide:
        return "outline-teal-500/50";
      case ElementCategory.AlkaliMetal:
        return "outline-red-500/50";
      case ElementCategory.AlkalineEarthMetal:
        return "outline-violet-500/50";
      case ElementCategory.Halogen:
        return "outline-orange-500/50";
      case ElementCategory.Lanthanide:
        return "outline-cyan-500/50";
      case ElementCategory.Metalloid:
        return "outline-lime-500/50";
      case ElementCategory.NobleGas:
        return "outline-amber-500/50";
      case ElementCategory.Nonmetal:
        return "outline-yellow-400/50";
      case ElementCategory.PostTransitionMetal:
        return "outline-green-500/50";
      case ElementCategory.TransitionMetal:
        return "outline-blue-500/50";
    }
  };
</script>

<div class="
  w-screen h-screen p-4 overflow-auto grid place-items-center
  bg-gradient-to-tr from-zinc-900 to-gray-900
">
  <div class="w-fit p-2 grid grid-cols-[repeat(18,min-content)] gap-1.5">
    {#each elements as elem}
      <GridCell
        gridX={elem.gridX}
        gridY={elem.gridY}
        backgroundColor={setBackgroundColor(elem.category)}
        outlineColor={setOutlineColor(elem.category)}
        hoverEffects
      >
        <div class="w-full h-full flex flex-col items-center">
          <div class="w-full h-fit flex items-center justify-between">
            <span class="text-zinc-200 font-bold">
              {elem.atomic_number}
            </span>
            <span class="text-zinc-200 text-[10px]">
              {elem.atomic_mass}
            </span>
          </div>
          <div class="flex text-center">
            <span class="grow text-2xl text-zinc-200 font-bold">
              {elem.symbol}
            </span>
          </div>
          <div class="grow grid">
            <div class="flex text-center">
              <span class="grow text-zinc-200 text-xs">
                {elem.name}
              </span>
            </div>
            <div class="flex text-center">
              <span class="grow text-zinc-200 text-[8px]">
                {elem.category}
              </span>
            </div>
          </div>
        </div>
      </GridCell>
    {/each}
    <GridCell
      gridX={3}
      gridY={6}
      backgroundColor={setBackgroundColor(ElementCategory.Lanthanide)}
      outlineColor={setOutlineColor(ElementCategory.Lanthanide)}
    >
      <div class="w-full h-full grid place-items-center">
        <span class="text-zinc-200 font-bold">
          57 - 71
        </span>
      </div>
    </GridCell>
    <GridCell
      gridX={3}
      gridY={7}
      backgroundColor={setBackgroundColor(ElementCategory.Actinide)}
      outlineColor={setOutlineColor(ElementCategory.Actinide)}
    >
      <div class="w-full h-full grid place-items-center">
        <span class="text-zinc-200 font-bold">
          89 - 103
        </span>
      </div>
    </GridCell>
  </div>
</div>
