<script lang="ts">
  export let showModal: boolean;

  let dialog: HTMLDialogElement;

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="
    h-[44rem] w-[64rem] rounded-lg bg-gray-800/60 p-4 outline outline-1
    outline-gray-600/50 backdrop-blur-[32px]
  "
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation class="relative text-zinc-200">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-bold">Element Details</h2>
      <!-- svelte-ignore a11y-autofocus -->
      <button autofocus on:click={() => dialog.close()} class="text-xl font-bold"> x </button>
    </div>
    <slot />
  </div>
</dialog>
