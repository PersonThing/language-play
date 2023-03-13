<main>
  <nav use:links>
    <a href="/language-play/pt">PT</a>
    <a href="/language-play/es">ES</a>
  </nav>

  <Router basepath="/language-play">
    <Route component={ConjugatorPT} />
    <Route path="/es" component={ConjugatorES} />
  </Router>
</main>

<script>
  import { Router, Route, links } from 'svelte-routing'
  import ConjugatorPT from './lib/ConjugatorPT.svelte'
  import ConjugatorES from './lib/ConjugatorES.svelte'
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
