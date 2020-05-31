<script>

    import { isActive, url } from "@sveltech/routify"
    import { writable } from 'svelte/store';
    import Transition from "../components/Transition.svelte"
    const width = writable();

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

    const mainTabs = [
        ['./hiragana', 'Hiragana', 'hiragana'],
        ['./katakana', 'Katakana', 'katakana'],
        ['./quiz', 'Quiz', 'quiz']
      ];

</script>

<div bind:offsetWidth={$width}>
  <div class="c-scroll-context">
    <slot decorator={Transition} scoped={{ width }} />
  </div>
  <NavBar borderPosition="top" background="alt">
    <TabBar data="{mainTabs}" />
  </NavBar>
</div>
