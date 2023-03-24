<template>
  <div class="timer">
    <div class="time" class:is-running={isRunning} class:is-nearly-over={isNearlyOver} class:is-paused={isPaused}>{timeRemaining}</div>
    <div class="controls">
      {#if !isRunning}
        <button on:click={startTimer}>{isPaused ? 'Continue' : 'Start'} timer</button>
      {:else}
        <button on:click={pauseTimer}>Pause timer</button>
      {/if}
      {#if timeRemaining < 60}
        <button on:click={resetTimer}>Reset timer</button>
      {/if}
    </div>
  </div>
</template>

<script>
  import { onMount } from 'svelte'

  let interval
  let timeRemaining = 60
  let isRunning = false
  $: isPaused = !isRunning && timeRemaining < 60
  $: isNearlyOver = isRunning && timeRemaining < 10

  const startTimer = () => {
    if (!isRunning) {
      isRunning = true
      interval = setInterval(() => {
        if (timeRemaining > 0) {
          timeRemaining--
        } else {
          clearInterval(interval)
          isRunning = false
        }
      }, 1000)
    }
  }

  const pauseTimer = () => {
    clearInterval(interval)
    isRunning = false
  }

  export const resetTimer = () => {
    pauseTimer()
    timeRemaining = 60
  }

  onMount(() => {
    return () => {
      clearInterval(interval)
    }
  })
</script>

<style>
  .timer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-align: center;
  }

  .time {
    font-size: 2rem;
  }

  .is-running {
    color: #070;
  }
  .is-paused {
    color: #ccc;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  .is-nearly-over {
    animation: bounce 1s infinite;
    color: #c00;
  }
</style>
