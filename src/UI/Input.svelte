<script>
    export let id = null;
    export let value = '';
    export let type = "text";
    export let disabled = false;
    export let labelId = null;
    export let autofocus = null;
    export let center = null;
</script>

{#if type == "password" }
    <!-- svelte-ignore a11y-autofocus -->
    <input
        class="c-input"
        class:c-input--center={center}
        id={labelId ? labelId : id}
        {autofocus}
        type="password"
        bind:value={value}
        {disabled}
    >
{:else}
    <!-- svelte-ignore a11y-autofocus -->
    <input
        class="c-input"
        class:c-input--center={center}
        id={labelId ? labelId : id}
        {autofocus}
        type="text"
        bind:value={value}
        {disabled}
    >
{/if}
