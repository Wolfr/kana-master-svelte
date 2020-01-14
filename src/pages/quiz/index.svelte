<script>

    import NavBar from '../../UI/NavBar.svelte';
    import Toggle from '../../UI/Toggle.svelte';

    import Toolbar from '../../UI/Toolbar.svelte';
    import ToolbarGroup from '../../UI/ToolbarGroup.svelte';
    import ToolbarItem from '../../UI/ToolbarItem.svelte';
    import ToolbarTitle from '../../UI/ToolbarTitle.svelte';

    import Spacer from '../../UI/Spacer.svelte';
    import ContentArea from '../../UI/ContentArea.svelte';

    import Button from '../../UI/Button.svelte';
    import Icon from '../../UI/Icon.svelte';

    import SegmentedControl from '../../UI/SegmentedControl.svelte';
    import SegmentedControlItem from '../../UI/SegmentedControlItem.svelte';

    import SegmentedControlRadio from '../../UI/SegmentedControlRadio.svelte';

    import { goto } from '@sveltech/routify';

    let radioOptions = [5,10,20];

    import { quizSettings } from '../../stores/quizsettings.js';

    function handleRadioGroupSendValue(event) {
        $quizSettings[0].quizLength = event.detail.text;
    }
    
    $: console.log($quizSettings);

</script>

<style>

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    label span {
        font-size: 1.3rem;
        display: block;
        opacity: 0.7;
    }

    :global(.c-toggle-list .c-toggle) {
        margin-top: 1rem;
    }

</style>

<svelte:head>
    <title>Quiz settings - Kana Master Web</title>
</svelte:head>

<NavBar borderPosition="bottom" background="alt">
    <Toolbar>
        <ToolbarGroup align="center">
            <ToolbarItem>
                <ToolbarTitle>Quiz</ToolbarTitle>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>

<ContentArea spacing>

    <p>Chosen syllabograms</p>

    <ul class="c-toggle-list">
        <li>
            <Toggle id="useHiragana" bind:checked={$quizSettings[0].hiragana} />
            <label for="useHiragana">
                Hiragana
                <span>All monographs and diacritics</span>
            </label>
        </li>
        <li>
            <Toggle id="useHiraganaDouble" bind:checked={$quizSettings[0].hiraganaDouble} />
            <label for="useHiraganaDouble">
                Hiragana
                <span>All digraphs, with diacritics</span>
            </label>
        </li>
        <li>
            <Toggle id="useKatakana" bind:checked={$quizSettings[0].katakana} />
            <label for="useKatakana">
                Katakana
                <span>All monographs and diacritics</span></label>
        </li>
        <li>
            <Toggle id="useKatakanaDouble" bind:checked={$quizSettings[0].katakanaDouble} />
            <label for="useKatakanaDouble">
                Katakana
                <span>All digraphs, with diacritics</span>
            </label>
        </li>
    </ul>

    <label>Amount of answers to give</label>
    <SegmentedControlRadio options={radioOptions} on:sendvalue={handleRadioGroupSendValue} />

    <Button block variant="primary" classValue="u-mt-2" on:click={$goto('/quiz/actual')}>Go!</Button>

</ContentArea>