<script>

    import NavBar from '../UI/NavBar.svelte';

    import Toolbar from '../UI/Toolbar.svelte';
    import ToolbarGroup from '../UI/ToolbarGroup.svelte';
    import ToolbarItem from '../UI/ToolbarItem.svelte';
    import ToolbarTitle from '../UI/ToolbarTitle.svelte';

    import Button from '../UI/Button.svelte';
    import Icon from '../UI/Icon.svelte';

    import SegmentedControl from '../UI/SegmentedControl.svelte';
    import SegmentedControlItem from '../UI/SegmentedControlItem.svelte';

    import { isActive, url } from '@sveltech/routify';

    const mainTabs = [
        ['./index', 'Hiragana'],
        ['./katakana', 'Katakana'],
        ['./quiz', 'Quiz']
      ];

</script>

<div class="c-scroll-context">
    <slot></slot>

    <NavBar borderPosition="top" background="white">

        <Toolbar>
            <ToolbarGroup align="justify">
                <ToolbarItem stretch>
                    <SegmentedControl>
                        {#each mainTabs as [path, name]}
                            <SegmentedControlItem stretch href={$url(path)} active={$isActive(path)}>{name}</SegmentedControlItem>
                        {/each}
                    </SegmentedControl>
                </ToolbarItem>
            </ToolbarGroup>
        </Toolbar>

    </NavBar>
</div>