<script>
    export let href;
    export let stretch;
    export let active;
</script>

<li
    class="c-segmented-control__item"
    class:c-segmented-control__item--active={active}
    class:c-segmented-control__item--stretch={stretch}
>
    <a href="{href}">
        <slot></slot>
    </a>
</li>