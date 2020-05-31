<script>
  import { goto } from '@sveltech/routify';

  import { url, params } from '@sveltech/routify';
  import _ from 'lodash';

  // UI
  import Button from './UI/Button.svelte';
  import Input from './UI/Input.svelte';

  // Data
  import Hiragana from './data/hiragana.js';
  import HiraganaDouble from './data/hiragana-digraphs.js';
  import Katakana from './data/katakana.js';
  import KatakanaDouble from './data/katakana-digraphs.js';

  // Filter data - Remove empty parts meant for layout purposes on grid overview
  let HiraganaFiltered = Hiragana.filter(function (el) { return el.character });
  let HiraganaDoubleFiltered = HiraganaDouble.filter(function (el) { return el.character });
  let KatakanaFiltered = Katakana.filter(function (el) { return el.character });
  let KatakanaDoubleFiltered = KatakanaDouble.filter(function (el) { return el.character });

  import { getRandom } from './getRandom.js';

  // Quiz settings
  import { quizSettings } from './stores/quizsettings.js';

  let quizLength =  $quizSettings[0].quizLength;

  let activeDataSets = [];
  if ($quizSettings[0].hiragana) { activeDataSets = activeDataSets.concat(HiraganaFiltered); }
  if ($quizSettings[0].katakana) { activeDataSets = activeDataSets.concat(KatakanaFiltered); }
  if ($quizSettings[0].hiraganaDouble) { activeDataSets = activeDataSets.concat(HiraganaDoubleFiltered); }
  if ($quizSettings[0].katakanaDouble) { activeDataSets = activeDataSets.concat(KatakanaDoubleFiltered); }
  let dataset = _.union(activeDataSets);

  let quizOptions = getRandom(dataset, quizLength);

  // Quiz logic and validation

  let currentQuizQuestion = 0;
  let answersValid = [];
  let quizMaxLength = quizOptions.length;
  let quizDone = false;

  $: {
      if (quizDone) {
          $goto('../finished');
      }
  }

  let currentValue = "";
  let correctValue = "";
  correctValue = quizOptions[currentQuizQuestion].romaji;

  function validateAnswer() {
      if (currentValue == correctValue) {
          currentValue = "";
          answersValid = answersValid.concat(true);
      } else {
          currentValue = "";
          answersValid = answersValid.concat(false);
      }
  }

  function advance() {
      currentQuizQuestion = ++currentQuizQuestion;
      if (currentQuizQuestion == quizMaxLength)  {
          validateAnswer();
          quizDone = true;
      } else {
          validateAnswer();
      }
  }

</script>

<style>

    p {
        text-align: center;
        margin: 2rem 0;
    }

    form {
        margin: auto;
        width: 100%;
    }

</style>

{#if !quizDone}
<form on:submit|preventDefault={advance}>
    {#each quizOptions as option, index}
        {#if currentQuizQuestion == index}
         <p>Enter the right characters. {quizOptions.length - index} remaining.</p>
         <div class="c-quiz-holder">
             <div class="c-quiz-question">{option.character}</div>
             <input type="hidden" bind:value={correctValue}>
             <Input type="text" autofocus center bind:value={currentValue} />
             <Button block variant="primary" classValue="u-mt" on:click={advance}>Next</Button>
          </div>
        {/if}
    {/each}

    <div class="c-validation-boxes">
        {#each answersValid as item}
          {#if item}
            <div class="c-validation-boxes__box c-validation-boxes__box--success"></div>
          {:else}
            <div class="c-validation-boxes__box c-validation-boxes__box--error"></div>
          {/if}
      {/each}
    </div>

</form>
{/if}
