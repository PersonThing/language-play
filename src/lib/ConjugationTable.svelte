<form on:submit|preventDefault={addVerb}>
  <div class="flex mb1">
    <input bind:value={newVerb} placeholder="New verb (infinitive)" />
    <button type="submit">Add</button>
  </div>
</form>

{#if $verbStore && tenses}
  <table>
    <thead>
      <tr>
        <th>pronouns</th>
        {#each $verbStore as verb}
          <th>{verb} <button on:click={() => removeVerb(verb)}>x</button></th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each tenses as tense}
        {#each tense.groups as group, i}
          {#if i == 0}
            <tr class="group-header">
              <td colspan={$verbStore.length + 1}>
                <strong>{tense.name}</strong>
                {#if tense.explanation}
                  <div class="explanation">{tense.explanation}</div>
                {/if}
                {#if tense.examples}
                  {#each tense.examples as example}
                    <div class="example">
                      <span>{example.left}</span>
                      =
                      <span>{example.right}</span>
                    </div>
                  {/each}
                {/if}
              </td>
            </tr>
          {/if}

          <tr>
            <td class="group-name"><em>{group.name}</em></td>
            {#each verbArgs as args}
              <td>{group.conjugate(args)}</td>
            {/each}
          </tr>
        {/each}
      {/each}
    </tbody>
  </table>
{/if}

<script>
  export let verbStore
  export let tenses
  export let getVerbConjugationArgs // a function that gets necessary meta data for a given verb to be able to conjugate it
  let newVerb = ''

  const addVerb = () => {
    const value = newVerb.toLowerCase().trim()
    if (!/(a|e|i)r$/.test(value)) return
    $verbStore = [...$verbStore.filter(v => v != value), value]
    newVerb = ''
  }
  const removeVerb = verb => ($verbStore = [...$verbStore.filter(v => v != verb)])

  $: verbArgs = $verbStore.map(v => getVerbConjugationArgs(v))
</script>

<style lang="scss">
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

        input {
          font-size: 12px;
        }

        button[type='submit'] {
          color: #080;
        }
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
