<div class="collection-picker">
  <select bind:value on:change={onCollectionChanged}>
    {#each Object.keys($collections) as key}
      <option value={key}>{key}</option>
    {/each}
  </select>

  {#if value && $collections[value]}
    <button on:click={editCollection}>Edit cards</button>
    <!-- <button on:click={deleteCollection}>Delete collection</button> -->
  {/if}

  <div class="flex-grow" />
  <button on:click={addCollection}>Create collection</button>
  <button on:click={resetCollections}>Reset collections</button>
</div>

{#if isAddingCollection}
  <div class="add-word-collection">
    <p style="mb1">You can create new card collections, stored on your device and only accessible to you</p>
    <form on:submit|preventDefault={saveNewWordCollection}>
      <div class="mb1">
        <label for="collection-name">Collection name</label>
        <input type="text" bind:value={newCollectionName} autofocus />
        <button type="submit">Save</button>
        <button type="button" on:click={() => (isAddingCollection = false)}>Cancel</button>
      </div>

      <EditCards bind:editingCollection={newCollection} {createCard} />
    </form>
  </div>
{:else if editingCollection}
  <div class="edit-word-collection">
    <p style="mb1">Changes you make are saved only on your device</p>
    <button type="button" on:click={saveCollectionChanges}>Save cards</button>
    <button type="button" on:click={() => (editingCollection = null)}>Cancel</button>

    <EditCards bind:editingCollection {createCard} />
  </div>
{/if}

<script>
  import { push } from 'svelte-spa-router'
  import collections from '../stores/taboo-word-collections'
  import EditCards from './Taboo.WordListPicker.EditCards.svelte'

  export let value = null

  let isAddingCollection = false
  let newCollectionName = ''
  let editingCollection = null
  let newCollection = null

  function onCollectionChanged() {
    editingCollection = null
    push(`/taboo/${value}`)
  }

  function resetCollections() {
    if (!confirm('Are you sure you want to reset all collections?')) return

    collections.reset()
    value = 'en'
    editingCollection = null
    isAddingCollection = false
  }

  function addCollection() {
    newCollectionName = ''
    newCollection = [createCard()]
    isAddingCollection = true
  }

  function saveNewWordCollection() {
    $collections = { ...$collections, [newCollectionName]: newCollection }
    isAddingCollection = false
    value = newCollectionName
  }

  const createCard = () => {
    return {
      word: '',
      tabooWords: ['', '', '', '', ''],
    }
  }

  function editCollection() {
    editingCollection = JSON.parse(JSON.stringify($collections[value]))
  }

  // function deleteCollection() {
  //   const newCollections = { ...$collections }
  //   delete newCollections[value]
  //   $collections = newCollections
  //   value = null
  // }

  function saveCollectionChanges() {
    $collections = { ...$collections, [value]: editingCollection }
    editingCollection = null
  }
</script>

<style lang="scss">
  .collection-picker {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    button {
      &.active {
        background-color: #ddd;
      }
    }
  }

  .add-word-collection,
  .edit-word-collection {
    background: #eee;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>
