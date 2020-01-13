<script>

  import { fade } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicIn } from 'svelte/easing';

  // UI controls

  import Icon from '../../UI/Icon.svelte';
  import Button from '../../UI/Button.svelte';
  import ButtonToolbar from '../../UI/ButtonToolbar.svelte';
  import NavBar from '../../UI/Navbar.svelte';

  import ContentArea from '../../UI/ContentArea.svelte';

  import Toolbar from '../../UI/Toolbar.svelte';
  import ToolbarGroup from '../../UI/ToolbarGroup.svelte';
  import ToolbarItem from '../../UI/ToolbarItem.svelte';
  import ToolbarTitle from '../../UI/ToolbarTitle.svelte';

  // Persist options through stores

  import { autoplayEnabled } from '../../stores/autoplay.js';
  import { romajiEnabled } from '../../stores/romaji.js';

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

  $: ({ language } = $params)

  // Data

  import Hiragana from '../../data/hiragana.js';
  import Katakana from '../../data/katakana.js';
  import HiraganaDouble from '../../data/hiragana-digraphs.js';
  import KatakanaDouble from '../../data/katakana-digraphs.js';

  // Filter our objects for the use of navigating them; they contain empty objects for layout purposes

  let HiraganaFiltered = Hiragana.filter(function (el) { return el.character });
  let KatakanaFiltered = Katakana.filter(function (el) { return el.character });
  let HiraganaDoubleFiltered = HiraganaDouble.filter(function (el) { return el.character });
  let KatakanaDoubleFiltered = KatakanaDouble.filter(function (el) { return el.character });

  let currentDataSet;

  $: currentDataSet =
     (language == "hiragana") ? HiraganaFiltered
     : (language == "katakana") ? KatakanaFiltered
     : (language == "hiragana-digraphs") ? HiraganaDoubleFiltered
     : KatakanaDoubleFiltered;

  // Position box in viewport
  let viewportWidth;
  let viewportHeight;
  let boxWidth;
  $: boxWidth = viewportWidth/1;

  // Slideshow state

  let current = tweened(0, {
    duration: 200,
    easing: cubicIn
  });

  $: $current = currentDataSet.map( function(e) { return e.romaji; }).indexOf(detail);

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

  function prev(e) { $current = clamp( --$current, 0, currentDataSet.length-1 ); }
  function next(e) { $current = clamp( ++$current, 0, currentDataSet.length-1 ); }

  // Keyboard shortcuts

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

  // Sound functionality

  let audioBox;

  function playSound() {
      audioBox.play();
  }

</script>

<style>

  .viewport {
    overflow: hidden;
    height: 100%;
  }

  .box-wrapper {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .box {
    float: left;
    text-align: center;
    opacity: 0.5;
    padding: 2rem 0;
    display: flex;
  }

  .inner {
    background: #FFF;
    margin: 0 auto;
    padding: 8rem;
    max-width: 100%;
    border-radius: 0.5rem;
    border: 1px solid #CCC;
  }

  .active {
    opacity: 1;
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
    margin: 0;
    opacity: 0.01;
    height: 0.1px;
  }

</style>

<svelte:window on:keyup={handleShortcut} />

<NavBar borderPosition="bottom" background="alt">
    <Toolbar>
        <ToolbarGroup align="left">
            <ToolbarItem>
                <Button icon="chevron-left" variant="ghost" href="{$url('../../')}">Back</Button>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>

<ContentArea alt>

    <div class="viewport" bind:offsetWidth={viewportWidth} bind:offsetHeight={viewportHeight}>
      <div class="box-wrapper"
           style="
                  width: {currentDataSet.length*boxWidth}px;
                  margin-left: {viewportWidth/2 - boxWidth/2}px;
                  transform: translate( -{ $current * boxWidth }px)
                ">
         {#each currentDataSet as character, index}
          <div class="box" style="width: {boxWidth}px; " class:active={$current == index} on:click={playSound}>
            <div class="inner">
              <div class="character">{character.character}</div>
              {#if $romajiEnabled}<div class="romaji">{character.romaji}</div>{/if}
            </div>
          </div>
        {:else}
            <p>No dataset defined.</p>
        {/each}
      </div>
    </div>

    {#each currentDataSet as character, index}
        {#if $current == index }
            <audio src="/audio/{character.romaji}.mp3" bind:this={audioBox} autoplay={$autoplayEnabled} controls />
        {/if}
    {/each}

</ContentArea>

<NavBar borderPosition="top" background="alt">
    <Toolbar>
        <ToolbarGroup align="left">
            <ToolbarItem>
                <Button on:click={prev} variant="ghost" disabled={current==0} layout="icon-only" icon="chevron-left">Previous</Button>
            </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup align="center">
            <ToolbarItem>
                <ButtonToolbar>
                    <Button on:click="{toggleRomaji}">
                        Toggle rōmaji
                    </Button>
                    <Button on:click="{toggleAutoplay}" layout="icon-only" icon="{ $autoplayEnabled ? 'sound-off': 'sound-on'}">Toggle sound</Button>
                </ButtonToolbar>
            </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup align="right">
            <ToolbarItem>
                <Button on:click={next} variant="ghost" layout="icon-only" icon="chevron-right">Next</Button>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>
