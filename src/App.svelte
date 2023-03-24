<main>
  <nav>
    <a href="/pt" use:link use:active>Portugués</a>
    <a href="/es" use:link use:active>Español</a>
    <a href="/taboo" use:link use:active>Taboo</a>
  </nav>

  <Router basepath="/language-play" {routes} />
</main>

<script>
  import Router, { link } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  import ConjugatorPT from './lib/ConjugatorPT.svelte'
  import ConjugatorES from './lib/ConjugatorES.svelte'
  import Taboo from './lib/Taboo.svelte'

  const routes = {
    '/pt': ConjugatorPT,
    '/es': ConjugatorES,
    '/taboo/:collectionKey?': Taboo,
    '*': ConjugatorPT,
  }
</script>

<style lang="scss">
  nav {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eee;

    a {
      display: block;
      padding: 10px 25px;
      text-decoration: none;
      color: #666;

      &:hover {
        background: #eee;
      }
    }
  }
  :global(nav a.active) {
    background: #eee;
  }
</style>
