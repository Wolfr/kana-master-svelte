<script>
    export let borderPosition = null;
    export let background = null;
</script>

<nav
    class="
      c-navbar
      { borderPosition ? 'c-navbar--bordered-'+borderPosition : ''}
      { background == 'white' ? 'c-navbar--white' : ''}
      { background == 'alt' ? 'c-navbar--alt' : ''}
      ">
    <slot></slot>
</nav>
