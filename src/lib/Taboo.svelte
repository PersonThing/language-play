<div class="taboo-game">
  <WordListPicker bind:value={$lastCollectionKey} />

  {#if card}
    <div class="card">
      <h2 class="word">{card.word} ({currentCardIndex + 1} / {collection.length})</h2>
      <ul class="taboo-words">
        {#each card.tabooWords as tabooWord}
          <li>{tabooWord}</li>
        {/each}
      </ul>
    </div>

    <div class="flex">
      <div class="flex-grow">
        <Timer bind:this={timer} />
      </div>
      <button on:click={nextCard}>Next card</button>
    </div>
  {/if}
</div>

<script>
  import collections from '../stores/taboo-word-collections'
  import LocalStorageStore from '../stores/local-storage-store'
  import Timer from './Taboo.Timer.svelte'
  import WordListPicker from './Taboo.WordListPicker.svelte'

  const lastCollectionKey = LocalStorageStore('taboo-selected-collection', 'en')

  export let params = null
  let timer = null
  $: if (params.collectionKey) {
    $lastCollectionKey = params.collectionKey
  }

  let currentCardIndex = -1

  $: collection = $collections[$lastCollectionKey]
  $: if (collection != null) {
    currentCardIndex = 0
    timer?.resetTimer()
  }

  $: card = currentCardIndex > -1 ? collection[currentCardIndex] : null

  function nextCard() {
    currentCardIndex = currentCardIndex + 1
    if (currentCardIndex > collection.length - 1) currentCardIndex = 0
  }
</script>

<style lang="scss">
  .taboo-game {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  p {
    margin-bottom: 0;
  }
  h2 {
    margin: 0;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 0;
    text-align: center;
  }
  .word {
    background: #070;
    color: #fff;
    padding: 10px;
  }
  .taboo-words {
    margin: 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-top: none;
    list-style: none;
    display: flex;
    flex-direction: column;
  }
</style>
