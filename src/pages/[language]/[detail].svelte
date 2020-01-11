<script>

  // UI controls

  import Icon from '../../UI/Icon.svelte';
  import Button from '../../UI/Button.svelte';
  import ButtonToolbar from '../../UI/ButtonToolbar.svelte';
  import NavBar from '../../UI/Navbar.svelte';

  import Toolbar from '../../UI/Toolbar.svelte';
  import ToolbarGroup from '../../UI/ToolbarGroup.svelte';
  import ToolbarItem from '../../UI/ToolbarItem.svelte';
  import ToolbarTitle from '../../UI/ToolbarTitle.svelte';

  // Persistent functions

  import { autoplayEnabled } from '../stores/autoplay.js';
  import { romajiEnabled } from '../stores/romaji.js';

  function toggleAutoplay() {
    autoplayEnabled.update(autoplayEnabled => !autoplayEnabled);
  }

  function toggleRomaji() {
    romajiEnabled.update(romajiEnabled => !romajiEnabled);
  }

  // State initial show

  import { url, params } from '@sveltech/routify';

  export let language;
  export let detail;

  // Data
  import Hiragana from '../../hiragana.js';
  import Katakana from '../../katakana.js';
  import HiraganaDouble from '../../hiragana-digraphs.js';
  import KatakanaDouble from '../../katakana-digraphs.js';

  // Filter our objects for the use of navigating them; they contain empty objects for layout purposes
  let HiraganaFiltered = Hiragana.filter(function (el) { return el.character });
  let KatakanaFiltered = Katakana.filter(function (el) { return el.character });
  let HiraganaDoubleFiltered = HiraganaDouble.filter(function (el) { return el.character });
  let KatakanaDoubleFiltered = KatakanaDouble.filter(function (el) { return el.character });

  let currentDataSet;

  // Old solution
  //$: Object.keys($params).forEach(function eachKey(key) { if (key == "language") { language = $params[key]; }});

  // New solution
  $: ({ language } = $params)

  $: currentDataSet =
     (language == "hiragana") ? HiraganaFiltered
     : (language == "katakana") ? KatakanaFiltered
     : (language == "hiragana-digraphs") ? HiraganaDoubleFiltered
     : KatakanaDoubleFiltered;

  //$: console.log(currentDataSet);
  //$: console.log(detail);

  let current;
  let curEq;

  $: current = currentDataSet.map( function(e) { return e.romaji; }).indexOf(detail);
  $: curEq = currentDataSet[current].romaji;

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

  function prev(e) { current = clamp( --current, 0, currentDataSet.length-1 ); }
  function next(e) { current = clamp( ++current, 0, currentDataSet.length-1 ); }

  // Shortcuts
  const ARROW_LEFT = 37;
  const ARROW_RIGHT = 39;

  function handleShortcut(e) {
      if (e.keyCode === ARROW_LEFT ) {
          prev();
      }
      if (e.keyCode === ARROW_RIGHT ) {
          next();
      }
  }


</script>

<style>

    .c-character-detail {
        font-family: sans-serif;
        text-align: center;
        padding: 2rem;
        margin: 0 auto;
        user-select: none;
        display: flex;
        align-items: center;
    }

    .character {
        font-size: 9.6rem;
    }

    .romaji {
        margin-top: 1rem;
        font-size: 2.8rem;
    }

    audio {
        display: block;
        margin: 2rem auto;
        opacity: 0;
    }

</style>

<svelte:window on:keyup={handleShortcut} />

<NavBar borderPosition="bottom">
    <Toolbar>
        <ToolbarGroup align="left">
            <ToolbarItem>
                <Button variant="ghost" icon="chevron-left" href="{$url('../../')}">Back</Button>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>


<div class="c-character-detail">
    {#each currentDataSet as character, index }
        {#if current == index }
        <div>
            <div class="character">{character.character}</div>
            {#if $romajiEnabled}<div class="romaji">{character.romaji}</div>{/if}
            <audio src="/audio/{curEq}.mp3" autoplay={$autoplayEnabled} controls />
        </div>
        {/if}
    {:else}
        <p>No dataset defined.</p>
    {/each}
</div>

<NavBar borderPosition="top">
    <Toolbar>
        <ToolbarGroup align="left">
            <ToolbarItem>
                <Button on:click={prev} disabled={current==0} layout="icon-only" icon="chevron-left">Previous</Button>
            </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup align="center">
            <ToolbarItem>
                <ButtonToolbar>
                    <Button on:click="{toggleRomaji}">
                        Romaji {#if $romajiEnabled}on{:else}off{/if}
                    </Button>
                    <Button on:click="{toggleAutoplay}">
                        Sound {#if $autoplayEnabled}on{:else}off{/if}
                    </Button>
                </ButtonToolbar>
            </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup align="right">
            <ToolbarItem>
                <Button on:click={next} layout="icon-only" icon="chevron-right">Next</Button>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>

