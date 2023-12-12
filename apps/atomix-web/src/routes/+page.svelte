<script lang="ts">
  import { ElementCategory, elements, type PeriodicElement } from "$lib/periodic-table";
	import ElementDetailsModal from "../components/ElementDetailsModal.svelte";
	import GridCell from "../components/GridCell.svelte";

  const backgroundColors = {
    [ElementCategory.Actinide]: "bg-teal-700",
    [ElementCategory.AlkaliMetal]: "bg-red-700",
    [ElementCategory.AlkalineEarthMetal]: "bg-violet-700",
    [ElementCategory.Halogen]: "bg-orange-700",
    [ElementCategory.Lanthanide]: "bg-cyan-700",
    [ElementCategory.Metalloid]: "bg-lime-700",
    [ElementCategory.NobleGas]: "bg-amber-700",
    [ElementCategory.Nonmetal]: "bg-yellow-600",
    [ElementCategory.PostTransitionMetal]: "bg-green-700",
    [ElementCategory.TransitionMetal]: "bg-blue-700",
  };

  const outlineColors = {
    [ElementCategory.Actinide]: "outline-teal-500/50",
    [ElementCategory.AlkaliMetal]: "outline-red-500/50",
    [ElementCategory.AlkalineEarthMetal]: "outline-violet-500/50",
    [ElementCategory.Halogen]: "outline-orange-500/50",
    [ElementCategory.Lanthanide]: "outline-cyan-500/50",
    [ElementCategory.Metalloid]: "outline-lime-500/50",
    [ElementCategory.NobleGas]: "outline-amber-500/50",
    [ElementCategory.Nonmetal]: "outline-yellow-400/50",
    [ElementCategory.PostTransitionMetal]: "outline-green-500/50",
    [ElementCategory.TransitionMetal]: "outline-blue-500/50",
  };

  let showModal = false;
  let selectedElement: PeriodicElement;
</script>

<div class="
  w-screen h-screen p-4 overflow-auto grid place-items-center
  bg-gradient-to-tr from-zinc-900 to-gray-900
">
  <ElementDetailsModal bind:showModal>
    {#if selectedElement}
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div class="
          h-[30rem] rounded-md grid place-items-center
          {backgroundColors[selectedElement.category]} bg-opacity-50
        ">
          <div class="text-center grid gap-2">
            <h2 class="text-4xl">
              {selectedElement.atomic_number}
            </h2>
            <h2 class="text-6xl font-bold">
              {selectedElement.symbol}
            </h2>
            <h2 class="text-4xl">
              {selectedElement.name}
            </h2>
            <h2 class="text-2xl">
              {selectedElement.category}
            </h2>
          </div>
        </div>
        <div>
          <table class="table-fixed w-full">
            <tbody class="[&>*]:[&>*]:p-2 [&>*:not(:last-child)]:border-b [&>*]:border-gray-600">
              <tr>
                <td class="font-bold">Atomic Mass</td>
                <td>{selectedElement.atomic_mass}</td>
              </tr>
              <tr>
                <td class="font-bold">Standard Phase</td>
                <td>{selectedElement.phase}</td>
              </tr>
              <tr>
                <td class="font-bold">Electron Configuration</td>
                <td></td>
              </tr>
              <tr>
                <td class="font-bold">Electronegativity (Pauling scale)</td>
                <td></td>
              </tr>
              <tr>
                <td class="font-bold">Electron Affinity</td>
                <td></td>
              </tr>
              <tr>
                <td class="font-bold">Atomic Radius</td>
                <td></td>
              </tr>
              <tr>
                <td class="font-bold">Melting Point</td>
                <td></td>
              </tr>
              <tr>
                <td class="font-bold">Boiling Point</td>
                <td></td>
              </tr>
              <tr>
                <td class="font-bold">Density</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    {/if}
  </ElementDetailsModal>
  <div class="w-fit p-2 grid grid-cols-[repeat(18,min-content)] gap-1.5">
    {#each elements as elem}
      <GridCell
        gridX={elem.gridX}
        gridY={elem.gridY}
        backgroundColor={backgroundColors[elem.category]}
        outlineColor={outlineColors[elem.category]}
        hoverEffects
        onClick={() => {
          showModal = true;
          selectedElement = elem;
        }}
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
      backgroundColor={backgroundColors[ElementCategory.Lanthanide]}
      outlineColor={outlineColors[ElementCategory.Lanthanide]}
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
      backgroundColor={backgroundColors[ElementCategory.Actinide]}
      outlineColor={outlineColors[ElementCategory.Actinide]}
    >
      <div class="w-full h-full grid place-items-center">
        <span class="text-zinc-200 font-bold">
          89 - 103
        </span>
      </div>
    </GridCell>
  </div>
</div>
