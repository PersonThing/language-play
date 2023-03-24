<div class="card-list">
  {#each editingCollection as word}
    <div class="card">
      <div class="card-word">
        <input type="text" bind:value={word.word} placeholder="Word" />
        <button on:click={() => (editingCollection = editingCollection.filter(w => w !== word))} tabindex="-1">x</button>
      </div>
      <div class="card-taboo-words">
        {#each word.tabooWords as tabooWord, index}
          <input type="text" bind:value={tabooWord} placeholder="Taboo word {index}" />
        {/each}
      </div>
    </div>
  {/each}
  <button type="button" on:click={() => (editingCollection = [...editingCollection, createCard()])}>New card</button>
</div>

<script>
  export let editingCollection = null
  export let createCard
</script>

<style lang="scss">
  .card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;

    > * {
      width: 200px;
      min-height: 200px;
    }

    .card {
      display: flex;
      flex-direction: column;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #fff;

      .card-word {
        padding: 5px;
        background-color: #070;
        display: flex;
        flex-direction: row;
        gap: 5px;
        input {
          width: 135px;
          border: none;
        }
      }

      input::placeholder {
        color: #999;
        font-style: italic;
      }

      .card-taboo-words {
        padding: 10px;
        border-top: none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
  }
</style>
