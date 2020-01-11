<script>
    export let alt = null;
    export let spacing = null;
</script>

<style>

    .alt {
        background: #EEE;
    }
    
    .spacing {
        padding: 1.6rem;
    }

</style>

<div class="c-content-area" class:alt={alt} class:spacing={spacing}>
    <slot></slot>
</div>