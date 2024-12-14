<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { usePlayerStore } from '@/stores/player'

const { game } = useGameStore()
const { player } = usePlayerStore()
</script>

<template>
  <template v-if="game && player">
    <h1>Waiting room</h1>

    <p>
      To invite friends, share the following game ID: <strong>{{ game.id }}</strong>
    </p>

    <template v-if="game.players.length >= 2 && game.activePlayer.id === player.id">
      <v-btn>Start the game</v-btn>
    </template>
  </template>
  <template v-else>
    <h1>An error occured, please refresh the page</h1>
  </template>
</template>
