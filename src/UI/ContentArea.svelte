<script>
    export let alt = null;
    export let spacing = null;
</script>

<style>

    div {
        background: #FFF;
    }
    
    .alt {
        background: #EEE;
    }
    
    .spacing {
        padding: 1.6rem;
    }

</style>
<div class:alt={alt} class:spacing={spacing}>
    <slot></slot>
</div>