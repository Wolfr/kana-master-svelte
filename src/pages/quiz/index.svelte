<script>

    import NavBar from '../../UI/NavBar.svelte';

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

    import { goto } from '@sveltech/routify';

</script>

<style>
    .checkbox-holder {
        padding: 1rem 0;
    }
    .checkbox-holder li {
        padding: 1rem 0;
    }
</style>

<NavBar borderPosition="bottom">
    <Toolbar>
        <ToolbarGroup align="center">
            <ToolbarItem>
                <ToolbarTitle>Quiz</ToolbarTitle>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>

<ContentArea>

    <ul class="checkbox-holder">
        <li>
            <input type="checkbox" id="useHiragana" checked> <label for="useHiragana">Hiragana</label>
        </li>
        <li>
            <input type="checkbox" id="useKatakana"> <label for="useKatakana">Katakana</label>
        </li>
        <li>
            <input type="checkbox" for="includeDiacritics"> <label for="includeDiacritics">Include diacritics</label>
        </li>
    </ul>

    <!--@todo rewrite segmented control to support radio buttons -->
    <label>Amount of answers to give</label>
    <SegmentedControl>
        <SegmentedControlItem stretch active>5</SegmentedControlItem>
        <SegmentedControlItem stretch>10</SegmentedControlItem>
        <SegmentedControlItem stretch>Other</SegmentedControlItem>
    </SegmentedControl>

    <Button block variant="primary" on:click={$goto('/quiz/actual')}>Go!</Button>

</ContentArea>