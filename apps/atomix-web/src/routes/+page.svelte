<script lang="ts">
  import { ElementCategory, elements } from "$lib/periodic-table";

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
  w-screen h-screen p-4 overflow-auto
  bg-gradient-to-tr from-zinc-900 to-gray-900
">
  <div class="w-fit mx-auto grid grid-cols-[repeat(18,min-content)] gap-1.5">
    {#each elements as elem}
      <div class="
        group w-[5.6rem] h-[5.75rem] px-1 py-0.5 outline outline-1 rounded-md
        backdrop-blur-sm bg-opacity-50 transition-all duration-150 ease-in-out
        {setBackgroundColor(elem.category)}
        {setOutlineColor(elem.category)}
        {elem.atomic_mass > 0 ? `
          hover:cursor-pointer hover:bg-opacity-70 hover:scale-150 hover:z-10
        ` : ""}
      " style="grid-row: {elem.gridY}; grid-column: {elem.gridX};">
        {#if elem.atomic_mass <= 0}
          {#if elem.category === ElementCategory.Lanthanide}
            <div class="w-full h-full grid place-items-center">
              <span class="text-zinc-200 font-bold">
                57 - 71
              </span>
            </div>
          {:else if elem.category === ElementCategory.Actinide}
            <div class="w-full h-full grid place-items-center">
              <span class="text-zinc-200 font-bold">
                89 - 103
              </span>
            </div>
          {/if}
        {:else}
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
        {/if}
      </div>
    {/each}
  </div>
</div>
