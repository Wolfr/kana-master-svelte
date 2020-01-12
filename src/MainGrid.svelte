<script>
    export let pageTitle = "Hiragana";
    export let dataset;
    export let urlLang;

    import { url } from '@sveltech/routify';

    import NavBar from './UI/NavBar.svelte';
    import ContentArea from './UI/ContentArea.svelte';

    import Toolbar from './UI/Toolbar.svelte';
    import ToolbarGroup from './UI/ToolbarGroup.svelte';
    import ToolbarItem from './UI/ToolbarItem.svelte';
    import ToolbarTitle from './UI/ToolbarTitle.svelte';

    import Button from './UI/Button.svelte';
    import Icon from './UI/Icon.svelte';

    import SegmentedControl from './UI/SegmentedControl.svelte';
    import SegmentedControlItem from './UI/SegmentedControlItem.svelte';

</script>

<svelte:head>
    <title>{pageTitle} - Kana Master Web</title>
</svelte:head>

<NavBar borderPosition="bottom"  background="alt">
    <Toolbar>
        <ToolbarGroup align="center">
            <ToolbarItem>
                <ToolbarTitle>{pageTitle}</ToolbarTitle>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>

<NavBar borderPosition="bottom" background="alt">
    <Toolbar>
        <ToolbarGroup align="justify">
            <ToolbarItem stretch>
                {#if urlLang.match(/hiragana/)}
                    <SegmentedControl>
                        <SegmentedControlItem stretch active={!urlLang.match(/digraph/)} href="/">Monographs</SegmentedControlItem>
                        <SegmentedControlItem stretch active={urlLang.match(/digraph/)} href="/hiragana-digraphs">Digraphs</SegmentedControlItem>
                    </SegmentedControl>
                {:else}
                    <SegmentedControl>
                        <SegmentedControlItem stretch active={!urlLang.match(/digraph/)} href="/katakana">Monographs</SegmentedControlItem>
                        <SegmentedControlItem stretch active={urlLang.match(/digraph/)} href="/katakana-digraphs">Digraphs</SegmentedControlItem>
                    </SegmentedControl>
                {/if}
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>

</NavBar>

<ContentArea>
    <ul class="c-character-grid">
        {#each dataset as character }
            {#if character.character == ""}
                <li class="c-character-grid__item">
                    <!-- Cell for layout purposes -->
                </li>
                {:else}
                <li class="c-character-grid__item">
                    <a href={$url('/:language/:detail/', { detail: character.romaji, language: urlLang })}>
                        {character.character}
                        <br>
                        {character.romaji}
                    </a>
                    <!-- {character.romaji} -->
                </li>
            {/if}
        {/each}
    </ul>
</ContentArea>