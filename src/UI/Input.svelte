<script>
   import { onMount } from 'svelte';

    export let id = null;
    export let value = '';
    export let type = "text";
    export let disabled = false;
    export let labelId = null;
    export let center = null;
    export let autofocus = null;

    let inputDOM;
    onMount(() => {
      if (autofocus) {
         console.log('hey');
        setTimeout(() => {
          inputDOM.focus()
        }, 0)
      }
    });

</script>

{#if type == "password" }
    <input
        bind:this={inputDOM}
        class="c-input"
        class:c-input--center={center}
        id={labelId ? labelId : id}
        type="password"
        bind:value={value}
        {disabled}
    >
{:else}
    <input
        bind:this={inputDOM}
        class="c-input"
        class:c-input--center={center}
        id={labelId ? labelId : id}
        type="text"
        bind:value={value}
        {disabled}
    >
{/if}
