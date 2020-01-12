<script>
  import { url, params } from '@sveltech/routify';
  import Quiz from '../../../Quiz.svelte';
  import ContentArea from '../../../UI/ContentArea.svelte';

  import { quizSettings } from '../../../stores/quizsettings.js';

</script>

<svelte:head>
    <title>Quiz - Kana Master Web</title>
</svelte:head>

<div class="c-scroll-context">
    <ContentArea spacing>
        <Quiz
            quizLength="{$quizSettings[0].quizLength}"
            useHiragana="{$quizSettings[0].hiragana}"
            useKatakana="{$quizSettings[0].katakana}"
            includeDiacritics="{$quizSettings[0].diacritics}"
        />
    </ContentArea>
</div>