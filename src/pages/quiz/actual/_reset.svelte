<script>

    import Spacer from '../../../UI/Spacer.svelte';
    import Button from '../../../UI/Button.svelte';
    import Icon from '../../../UI/Icon.svelte';
    import Input from '../../../UI/Input.svelte';

</script>

<style>
    .character {
        font-size: 9.6rem;
    }
</style>

<!-- @todo get a character from the chosen set -->
<p class="character">じゅ</p>

<Input type="text" value="ju" />

<Button block>Next</Button>