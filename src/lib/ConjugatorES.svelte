<div class="p1">
  <!-- <div class="flex">
    <label for="inclui-tempos-compoostos">
      <input name="inclui-tempos-compoostos" id="inclui-tempos-compoostos" type="checkbox" bind:checked={includeCompositeTenses} />
      Include composite tenses
    </label>
  </div> -->

  <ConjugationTable {tenses} {verbStore} {getVerbConjugationArgs} />
</div>

<script>
  import { buildTenses, getVerbConjugationArgs } from '../services/verb-tenses-es.js'
  import LocalStorageStore from '../stores/local-storage-store.js'
  import ConjugationTable from './ConjugationTable.svelte'

  const verbStore = LocalStorageStore('verbs-es', ['hablar', 'comer', 'vivir'])

  let includeCompositeTenses = true

  $: tenses = buildTenses(includeCompositeTenses)
</script>
