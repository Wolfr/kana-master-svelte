<script>
  import quizOptionsSrc from '../../../quiz.js';
  import { getRandom } from '../../../getRandom.js';
  import Button from '../../../UI/Button.svelte';
  import Input from '../../../UI/Input.svelte';

    let quizLength = 5;
    let quizOptions = getRandom(quizOptionsSrc, quizLength);

  let currentQuizQuestion = 0;
    let answersValid = [];
    let quizMaxLength = quizOptions.length;
    let quizDone = false;

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

    .question {
        font-size: 6rem;
        text-align: center;
    }

    .holder {
        padding: 3rem;
        border: 1px solid #CCC;
        box-shadow: 0 4px 0 1px #CCC;
        margin: 1rem 1rem 2rem;
    }
    
    p {
        text-align: center;
        margin: 2rem 0;
    }

    /* Validation boxes */

    .validation-boxes {
        margin: 0 auto;
        text-align: center;
    }

    .validation-box {
        width: 2rem;
        height: 1rem;
        display: inline-block;
        margin-right: 0.2rem;
    }

    .validation-box.success {
    background: green;
    }

    .validation-box.error {
    background: red;
    }

</style>


{#if !quizDone}

<form on:submit|preventDefault={advance}>
    {#each quizOptions as option, index}
        {#if currentQuizQuestion == index}
         <p>Enter the right characters. {quizOptions.length - index} remaining.</p>
         <div class="holder">
             <div class="question">{option.character}</div>
             <input type="hidden" bind:value={correctValue}>
             <!-- svelte-ignore a11y-autofocus -->
             <Input type="text" center autofocus bind:value={currentValue} />
             <Button block variant="primary" classValue="u-mt">Submit</Button>
            </div>
        {/if}
    {/each}
</form>
{:else}
<div class="holder">
    <p>
        Quiz done!
    </p>
    <Button block >Go to main screen</Button>
</div>
{/if}

<div class="validation-boxes">
    {#each answersValid as item}
      {#if item}
        <div class="validation-box success"></div>
      {:else}
        <div class="validation-box error"></div>
      {/if}
  {/each}
</div>