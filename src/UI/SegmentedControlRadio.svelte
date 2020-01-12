<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function sendValue(item) {
	    dispatch('sendvalue', {
            text: item
        });
    }

    export let options;
    let activeIndex = 0;
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
                    checked={activeIndex == index}
                    on:change={ () => activeIndex = index}
                    on:change={ () => sendValue(item) }
                >
                {item}
            </label>
        </li>
    {/each}
</ul>
