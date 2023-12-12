<script lang="ts">
  import {
    ElementCategory,
    ElementPhase,
    elements,
    type PeriodicElement,
    type PeriodicTableFilter
  } from '$lib/periodic-table';
  import {
    categoryBackgroundColors,
    categoryOutlineColors,
    phaseBackgroundColors,
    phaseOutlineColors
  } from '$lib/theme';
  import ElementDetailsModal from '../components/ElementDetailsModal.svelte';
  import GridCell from '../components/GridCell.svelte';

  let showModal = false;
  let selectedElement: PeriodicElement;
  let currentFilter: PeriodicTableFilter = 'category';

  const handleFilterChange = (
    e: Event & {
      currentTarget: EventTarget & HTMLSelectElement;
    }
  ) => {
    const newFilter = e.currentTarget.value;

    switch (newFilter) {
      case 'category':
        currentFilter = 'category';
        break;
      case 'phase':
        currentFilter = 'phase';
        break;
      case 'electron_configuration':
        currentFilter = 'electron_configuration';
        break;
    }
  };

  const renderFilteredBackgroundColors = (
    element: PeriodicElement,
    filter: PeriodicTableFilter
  ) => {
    switch (filter) {
      case 'electron_configuration':
      case 'category':
        return categoryBackgroundColors[element.category];
      case 'phase':
        return phaseBackgroundColors[element.phase];
    }
  };

  const renderFilteredOutlineColors = (element: PeriodicElement, filter: PeriodicTableFilter) => {
    switch (filter) {
      case 'electron_configuration':
      case 'category':
        return categoryOutlineColors[element.category];
      case 'phase':
        return phaseOutlineColors[element.phase];
    }
  };

  const processElectronConfiguration = (config: string) => {
    const shells = config.split(' ');

    const processed = shells.map((str) => {
      const shell = str.match(/(\d+)([spdf])(\d+)/);

      if (shell) {
        const [, number, subshell, electrons] = shell;
        return `<span>${number}${subshell}<sup>${electrons}</sup></span>`;
      }

      return str;
    });

    return processed.join('');
  };
</script>

<div
  class="
  grid h-screen w-screen place-items-center overflow-auto bg-gradient-to-tr
  from-zinc-900 to-gray-900 p-4
"
>
  <ElementDetailsModal bind:showModal>
    {#if selectedElement}
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div
          class="
          grid h-[30rem] place-items-center rounded-md bg-opacity-50
          {renderFilteredBackgroundColors(selectedElement, currentFilter)}
        "
        >
          <div class="grid gap-2 text-center">
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
          <table class="w-full table-fixed">
            <tbody class="[&>*:not(:last-child)]:border-b [&>*]:border-gray-600 [&>*]:[&>*]:p-2">
              <tr>
                <td class="font-bold">Atomic Mass</td>
                <td class="font-mono">{selectedElement.atomic_mass}</td>
              </tr>
              <tr>
                <td class="font-bold">Standard Phase</td>
                <td class="font-mono">{selectedElement.phase}</td>
              </tr>
              <tr>
                <td class="font-bold">Electron Configuration</td>
                <td class="font-mono">
                  {@html processElectronConfiguration(selectedElement.electron_configuration)}
                </td>
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
  <div class="relative grid w-fit grid-cols-[repeat(18,min-content)] gap-1.5 p-2">
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
        <div class="flex h-full w-full flex-col items-center">
          <div class="flex h-fit w-full items-center justify-between">
            <span class="font-bold text-zinc-200">
              {elem.atomic_number}
            </span>
            <span class="text-[10px] text-zinc-200">
              {elem.atomic_mass}
            </span>
          </div>
          <div class="flex text-center">
            <span class="grow text-2xl font-bold text-zinc-200">
              {elem.symbol}
            </span>
          </div>
          <div class="grid grow">
            <div class="flex text-center">
              <span class="grow text-xs text-zinc-200">
                {elem.name}
              </span>
            </div>
            <div class="flex text-center">
              <span class="grow text-[8px] text-zinc-200">
                {#if currentFilter === 'category'}
                  {elem.category}
                {:else if currentFilter === 'phase'}
                  {elem.phase}
                {:else if currentFilter === 'electron_configuration'}
                  {@html processElectronConfiguration(elem.electron_configuration)}
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
      backgroundColor={currentFilter === 'category' || currentFilter === 'electron_configuration'
        ? categoryBackgroundColors[ElementCategory.Lanthanide]
        : currentFilter === 'phase'
          ? phaseBackgroundColors[ElementPhase.Solid]
          : ''}
      outlineColor={currentFilter === 'category' || currentFilter === 'electron_configuration'
        ? categoryOutlineColors[ElementCategory.Lanthanide]
        : currentFilter === 'phase'
          ? phaseOutlineColors[ElementPhase.Solid]
          : ''}
    >
      <div class="grid h-full w-full place-items-center">
        <span class="font-bold text-zinc-200"> 57 - 71 </span>
      </div>
    </GridCell>
    <GridCell
      gridX={3}
      gridY={7}
      backgroundColor={currentFilter === 'category' || currentFilter === 'electron_configuration'
        ? categoryBackgroundColors[ElementCategory.Actinide]
        : currentFilter === 'phase'
          ? phaseBackgroundColors[ElementPhase.Solid]
          : ''}
      outlineColor={currentFilter === 'category' || currentFilter === 'electron_configuration'
        ? categoryOutlineColors[ElementCategory.Actinide]
        : currentFilter === 'phase'
          ? phaseOutlineColors[ElementPhase.Solid]
          : ''}
    >
      <div class="grid h-full w-full place-items-center">
        <span class="font-bold text-zinc-200"> 89 - 103 </span>
      </div>
    </GridCell>
    <div class="absolute flex flex-col gap-2" style="grid-column: 13;">
      <label for="filter-select" class="font-bold text-zinc-200"> Choose a filter: </label>
      <select
        name="filters"
        id="filter-select"
        on:change={handleFilterChange}
        class="
          rounded bg-gray-800 px-3 py-2 text-zinc-200 outline
          outline-1 outline-gray-700 hover:cursor-pointer
        "
      >
        <option value="category" selected={currentFilter === 'category'}>
          Category (Chemical Group)
        </option>
        <option value="phase" selected={currentFilter === 'phase'}> Phase </option>
        <option
          value="electron_configuration"
          selected={currentFilter === 'electron_configuration'}
        >
          Electron Configuration
        </option>
      </select>
    </div>
  </div>
</div>
