<script lang="ts">
  export let showModal: boolean;

  let dialog: HTMLDialogElement;

  $: if(dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="
    w-[64rem] h-[44rem] p-4 outline outline-1 outline-gray-600/50 rounded-lg
    bg-gray-800/60 backdrop-blur-[32px]
  "
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click|stopPropagation
    class="relative text-zinc-200"
  >
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-bold">
        Element Details
      </h2>
      <!-- svelte-ignore a11y-autofocus -->
      <button
        autofocus
        on:click={() => dialog.close()}
        class="font-bold text-xl"
      >
        x
      </button>
    </div>
    <slot />
  </div>
</dialog>
