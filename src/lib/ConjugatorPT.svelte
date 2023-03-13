<div class="p1">
  <form on:submit|preventDefault={addVerb}>
    <div class="controls">
      <input bind:value={newVerb} placeholder="New verb (infinitive)" />
      <button type="submit">Add</button>
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
  </form>

  <table>
    <thead>
      <tr>
        <th>pronomes</th>
        {#each $verbs as verb}
          <th>{verb} <button on:click={() => removeVerb(verb)}>x</button></th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each tenses as tense}
        {#each tense.groups as group, i}
          {#if i == 0}
            <tr class="group-header">
              <td colspan={$verbs.length + 1}>
                <strong>{tense.name}</strong>
                {#if tense.examples}
                  {#each tense.examples as example}
                    <div class="example">
                      <span>{example.english}</span>
                      =
                      <span>{example.portuguese}</span>
                    </div>
                  {/each}
                {/if}
              </td>
            </tr>
          {/if}

          <tr>
            <td class="group-name"><em>{group.name}</em></td>
            {#each $verbs as infinitive}
              <td>{group.func(infinitive)}</td>
            {/each}
          </tr>
        {/each}
      {/each}
    </tbody>
  </table>
</div>

<script>
  import buildTenses from '../services/verb-tenses-pt.js'
	import LocalStorageStore from '../stores/local-storage-store.js';

	const verbs = LocalStorageStore('verbs', ['gostar', 'comer', 'desistir'])
	// pagar', 'ligar', 'chegar', 'preferir', 'checar', 'comer', 'gostar', 'partir', 'corrigir'
  let newVerb = ''
  let includeTu = true
  let includeVos = false
  let includeCompositeTenses = true

  $: tenses = buildTenses(includeCompositeTenses, includeTu, includeVos)

  const addVerb = () => {
    const final = newVerb.substring(newVerb.length - 2, newVerb.length)
    if (['ar', 'er', 'ir'].indexOf(final) < 0) return
    $verbs = [...$verbs, newVerb]
    newVerb = ''
  }
  const removeVerb = verbo => ($verbs = [...$verbs.filter(v => v != verbo)])
</script>

<style lang="scss">
  .controls {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    margin-bottom: 5px;

    button,
    input {
      margin: 0;
    }
  }

  table {
    table-layout: fixed;
    border-collapse: collapse;
    font-size: 14px;

    button {
      font-size: 12px;
      padding: 0;
      margin: 0;
      border: none;
      background: none;
      color: #f00;
    }

    thead {
      th {
        background: #ccc;
      }
    }
    tbody {
      tr.group-header {
        td,
        th {
          border-top: 10px solid #fff;
          background: #eee;

          .example {
            font-size: 12px;
						font-style: italic;
          }
        }
      }
      td {
        background: #efe;

        &.group-name {
          background: #eef;
        }
      }
      td,
      th {
        text-align: left;
        padding: 5px;
      }
      th strong {
        white-space: nowrap;
      }
      th span {
        display: block;
        font-weight: normal;
        font-size: 12px;
      }
    }
  }
</style>
