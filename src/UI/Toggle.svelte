<script>
    export let checked;
    export let id;
</script>

<div class="c-toggle">
    <input type="checkbox" {id} bind:checked={checked} on:change>
    <div class="c-toggle__back"></div>
    <div class="c-toggle__knob"></div>
</div>