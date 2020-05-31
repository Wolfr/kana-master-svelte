<script>

    export let icon;

    import iconHiragana from './TabBarIcons/hiragana.svg';
    import iconKatakana from './TabBarIcons/katakana.svg';
    import iconQuiz from './TabBarIcons/quiz.svg';

</script>

<div class="c-tab-bar__icon">
    {#if icon == 'hiragana'}
        {@html iconHiragana}
    {/if}
    {#if icon == 'katakana'}
        {@html iconKatakana}
    {/if}
    {#if icon == 'quiz'}
        {@html iconQuiz}
    {/if}
</div>