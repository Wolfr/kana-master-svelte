<script>
  import { url, params } from '@sveltech/routify';
  import Button from '../../../UI/Button.svelte';
  import ContentArea from '../../../UI/ContentArea.svelte';
</script>

<div class="c-scroll-context">
    <ContentArea spacing alt flex>
        <div class="c-quiz-finished">
            <p>Quiz done!</p>
            <Button block href="{$url('/index')}">Go to main screen</Button>
        </div>
    </ContentArea>
</div>
