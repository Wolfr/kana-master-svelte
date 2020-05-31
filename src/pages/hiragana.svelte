<script>
    import MainGrid from '../MainGrid.svelte';
    import Hiragana from '../data/hiragana.js';
    
    import NavBar from '../UI/NavBar.svelte';
    import TabBar from '../UI/TabBar.svelte';

    const mainTabs = [
      ['/hiragana', 'Hiragana', 'hiragana'],
      ['/katakana', 'Katakana', 'katakana'],
      ['/quiz', 'Quiz', 'quiz']
      ];
    
</script>

<MainGrid pageTitle="Hiragana" urlLang="hiragana" dataset={Hiragana} />
<NavBar borderPosition="top" background="alt">
    <TabBar data="{mainTabs}" />
</NavBar>