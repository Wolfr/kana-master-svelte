<script>
    export let options;
    export let activeIndex = 0;
    $: console.log(activeIndex);
</script>

<ul class="c-segmented-control-radio">
    {#each options as item, index}
        <li class="c-segmented-control-radio__item" class:c-segmented-control-radio__item--active={index == activeIndex}>
            <label for="radio-{index+1}">
                <input
                    type="radio"
                    id="radio-{index+1}"
                    name="group-radios"
                    value={item}
                    checked={activeIndex}
                    on:change={ () => activeIndex = index}>
                {item}
            </label>
        </li>
    {/each}
</ul>
