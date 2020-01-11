<script>
    export let checked = null;
    export let id;
</script>

<div class="c-toggle">
    <input type="checkbox" {id} {checked}>
    <div class="c-toggle__back"></div>
    <div class="c-toggle__knob"></div>
</div>