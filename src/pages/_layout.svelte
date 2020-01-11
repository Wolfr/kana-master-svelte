<script>

    import NavBar from '../UI/NavBar.svelte';
    import TabBar from '../UI/TabBar.svelte';
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
        ['./index', 'Hiragana', 'hiragana'],
        ['./katakana', 'Katakana', 'katakana'],
        ['./quiz', 'Quiz', 'quiz']
      ];

</script>

<div class="c-scroll-context">
    <slot></slot>

    <NavBar borderPosition="top" background="white">

        <TabBar data="{mainTabs}" />

    </NavBar>
</div>