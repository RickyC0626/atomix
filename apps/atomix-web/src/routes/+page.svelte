<script lang="ts">
  import { ElementCategory, elements } from "$lib/periodic-table";

  const setBackgroundColor = (category: ElementCategory) => {
    switch(category) {
      case ElementCategory.Actinide:
        return "";
      case ElementCategory.AlkaliMetal:
        return "bg-red-700";
      case ElementCategory.AlkalineEarthMetal:
        return "bg-blue-700";
      case ElementCategory.Halogen:
        return "bg-yellow-600";
      case ElementCategory.Lanthanide:
        return "";
      case ElementCategory.Metalloid:
        return "bg-lime-700";
      case ElementCategory.NobleGas:
        return "bg-orange-700"
      case ElementCategory.Nonmetal:
        return "bg-amber-700";
      case ElementCategory.PostTransitionMetal:
        return "";
      case ElementCategory.TransitionMetal:
        return "";
    }
  };

  const setOutlineColor = (category: ElementCategory) => {
    switch(category) {
      case ElementCategory.Actinide:
        return "";
      case ElementCategory.AlkaliMetal:
        return "outline-red-600";
      case ElementCategory.AlkalineEarthMetal:
        return "outline-blue-600";
      case ElementCategory.Halogen:
        return "outline-yellow-500";
      case ElementCategory.Lanthanide:
        return "";
      case ElementCategory.Metalloid:
        return "outline-lime-600";
      case ElementCategory.NobleGas:
        return "outline-orange-600"
      case ElementCategory.Nonmetal:
        return "outline-amber-600";
      case ElementCategory.PostTransitionMetal:
        return "";
      case ElementCategory.TransitionMetal:
        return "";
    }
  };
</script>

<div class="w-screen h-screen grid bg-zinc-800 place-items-center">
  <div class="grid grid-cols-10 gap-3">
    {#each elements as elem}
      <div class="w-[6.5rem] h-[7.5rem] p-1 outline outline-2 {setOutlineColor(elem.category)} {setBackgroundColor(elem.category)}">
        <div class="w-full h-full grid items-center">
          <div class="w-full h-fit flex items-center justify-between">
            <span class="text-zinc-300 font-bold text-lg">
              {elem.atomic_number}
            </span>
            <span class="text-zinc-300 text-xs">
              {elem.atomic_mass}
            </span>
          </div>
          <div class="flex text-center">
            <span class="grow text-3xl text-zinc-300 font-bold">
              {elem.symbol}
            </span>
          </div>
          <div class="flex text-center">
            <span class="grow text-zinc-300 text-sm">
              {elem.name}
            </span>
          </div>
          <div class="flex text-center">
            <span class="grow text-zinc-300 text-[10px]">
              {elem.category}
            </span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
