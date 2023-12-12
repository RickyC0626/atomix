<script lang="ts">
  import {
    ElementCategory,
    ElementPhase,
    elements,
    type PeriodicElement,
    type PeriodicTableFilter
  } from "$lib/periodic-table";
	import {
    categoryBackgroundColors,
    categoryOutlineColors,
    phaseBackgroundColors,
    phaseOutlineColors
  } from "$lib/theme";
	import ElementDetailsModal from "../components/ElementDetailsModal.svelte";
	import GridCell from "../components/GridCell.svelte";

  let showModal = false;
  let selectedElement: PeriodicElement;
  let currentFilter: PeriodicTableFilter = "category";

  const handleFilterChange = (e: Event & {
    currentTarget: EventTarget & HTMLSelectElement;
  }) => {
    const newFilter = e.currentTarget.value;

    switch(newFilter) {
      case "category":
        currentFilter = "category";
        break;
      case "phase":
        currentFilter = "phase";
        break;
    }
  };

  const renderFilteredBackgroundColors = (
    element: PeriodicElement, filter: PeriodicTableFilter
  ) => {
    switch(filter) {
      case "category":
        return categoryBackgroundColors[element.category];
      case "phase":
        return phaseBackgroundColors[element.phase];
    }
  };

  const renderFilteredOutlineColors = (
    element: PeriodicElement, filter: PeriodicTableFilter
  ) => {
    switch(filter) {
      case "category":
        return categoryOutlineColors[element.category];
      case "phase":
        return phaseOutlineColors[element.phase];
    }
  }
</script>

<div class="
  w-screen h-screen p-4 overflow-auto grid place-items-center
  bg-gradient-to-tr from-zinc-900 to-gray-900
">
  <ElementDetailsModal bind:showModal>
    {#if selectedElement}
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div class="
          h-[30rem] rounded-md grid place-items-center bg-opacity-50
          {renderFilteredBackgroundColors(selectedElement, currentFilter)}
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
                <td>{selectedElement.electron_configuration}</td>
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
  <div class="relative w-fit p-2 grid grid-cols-[repeat(18,min-content)] gap-1.5">
    {#each elements as elem}
      <GridCell
        gridX={elem.gridX}
        gridY={elem.gridY}
        backgroundColor={renderFilteredBackgroundColors(elem, currentFilter)}
        outlineColor={renderFilteredOutlineColors(elem, currentFilter)}
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
                {#if currentFilter === "category"}
                  {elem.category}
                {:else if currentFilter === "phase"}
                  {elem.phase}
                {/if}
              </span>
            </div>
          </div>
        </div>
      </GridCell>
    {/each}
    <GridCell
      gridX={3}
      gridY={6}
      backgroundColor={
        currentFilter === "category" ?
          categoryBackgroundColors[ElementCategory.Lanthanide] :
        currentFilter === "phase" ?
          phaseBackgroundColors[ElementPhase.Solid] : ""
      }
      outlineColor={
        currentFilter === "category" ?
          categoryOutlineColors[ElementCategory.Lanthanide] :
        currentFilter === "phase" ?
          phaseOutlineColors[ElementPhase.Solid] : ""
      }
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
      backgroundColor={
        currentFilter === "category" ?
          categoryBackgroundColors[ElementCategory.Actinide] :
        currentFilter === "phase" ?
          phaseBackgroundColors[ElementPhase.Solid] : ""
      }
      outlineColor={
        currentFilter === "category" ?
          categoryOutlineColors[ElementCategory.Actinide] :
        currentFilter === "phase" ?
          phaseOutlineColors[ElementPhase.Solid] : ""
      }
    >
      <div class="w-full h-full grid place-items-center">
        <span class="text-zinc-200 font-bold">
          89 - 103
        </span>
      </div>
    </GridCell>
    <div class="absolute flex flex-col gap-2" style="grid-column: 13;">
      <label for="filter-select" class="text-zinc-200 font-bold">
        Choose a filter:
      </label>
      <select
        name="filters"
        id="filter-select"
        on:change={handleFilterChange}
        class="
          bg-gray-800 text-zinc-200 rounded px-3 py-2 hover:cursor-pointer
          outline outline-1 outline-gray-700
        "
      >
        <option value="category" selected={currentFilter === "category"}>
          Category (Chemical Group)
        </option>
        <option value="phase" selected={currentFilter === "phase"}>
          Phase
        </option>
      </select>
    </div>
  </div>
</div>
