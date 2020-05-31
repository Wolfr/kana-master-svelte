<script>
  
  import NavBar from '../UI/NavBar.svelte';
  import TabBar from '../UI/TabBar.svelte';

  const mainTabs = [
    ['/hiragana', 'Hiragana', 'hiragana'],
    ['/katakana', 'Katakana', 'katakana'],
    ['/quiz', 'Quiz', 'quiz']
    ];
  
</script>
    
<style>

  .flex-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

</style>

<div class="flex-wrapper">
  <slot />
  <NavBar borderPosition="top" background="alt">
      <TabBar data="{mainTabs}" />
  </NavBar>
</div>
