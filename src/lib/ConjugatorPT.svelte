<div class="p1">
  <div class="flex">
    <label for="inclui-tu">
      <input name="inclui-tu" id="inclui-tu" type="checkbox" bind:checked={includeTu} />
      Include Tu
    </label>
    <label for="inclui-vos">
      <input name="inclui-vos" id="inclui-vos" type="checkbox" bind:checked={includeVos} />
      Include Vós
    </label>
    <label for="inclui-tempos-compoostos">
      <input name="inclui-tempos-compoostos" id="inclui-tempos-compoostos" type="checkbox" bind:checked={includeCompositeTenses} />
      Include composite tenses
    </label>
  </div>

  <ConjugationTable {tenses} verbs={$verbs} />
</div>

<script>
  import buildTenses from '../services/verb-tenses-pt.js'
  import LocalStorageStore from '../stores/local-storage-store.js'
  import ConjugationTable from './ConjugationTable.svelte'

  const verbs = LocalStorageStore('verbs', ['gostar', 'comer', 'desistir'])

  let includeTu = true
  let includeVos = false
  let includeCompositeTenses = true

  $: tenses = buildTenses(includeCompositeTenses, includeTu, includeVos)
</script>

