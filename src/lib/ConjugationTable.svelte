<form on:submit|preventDefault={addVerb}>
  <div class="flex mb1">
    <input bind:value={newVerb} placeholder="New verb (infinitive)" />
    <button type="submit">Add</button>
  </div>
</form>

{#if verbs && tenses}
  <table>
    <thead>
      <tr>
        <th>pronouns</th>
        {#each verbs as verb}
          <th>{verb} <button on:click={() => removeVerb(verb)}>x</button></th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each tenses as tense}
        {#each tense.groups as group, i}
          {#if i == 0}
            <tr class="group-header">
              <td colspan={verbs.length + 1}>
                <strong>{tense.name}</strong>
                {#if tense.explanation}
                  <div class="explanation">{tense.explanation}</div>
                {/if}
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
            {#each verbs as infinitive}
              <td>{group.func(infinitive)}</td>
            {/each}
          </tr>
        {/each}
      {/each}
    </tbody>
  </table>
{/if}

<script>
  export let verbs
  export let tenses
  let newVerb = ''

  const addVerb = () => {
    const final = newVerb.substring(newVerb.length - 2, newVerb.length)
    if (['ar', 'er', 'ir'].indexOf(final) < 0) return
    verbs = [...verbs, newVerb]
    newVerb = ''
  }
  const removeVerb = verb => (verbs = [...verbs.filter(v => v != verb)])
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
