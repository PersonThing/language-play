<main>
  <nav>
    <a href="/language-play/#/pt">PT</a>
    <a href="/language-play/#/es">ES</a>
  </nav>

  <Router basepath="/language-play" {routes} />
</main>

<script>
  import Router from 'svelte-spa-router'
  import ConjugatorPT from './lib/ConjugatorPT.svelte'
  import ConjugatorES from './lib/ConjugatorES.svelte'

  const routes = {
    '/pt': ConjugatorPT,
    '/es': ConjugatorES,
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
      padding: 10px 15px;
      text-decoration: none;
      &:hover {
        background: #eee;
      }
    }
  }
</style>
