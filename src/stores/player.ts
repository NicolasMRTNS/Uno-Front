import type { Player } from '@/models/Player'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  const player = ref<Player | undefined>(undefined)

  const setPlayer = (currentPlayer: Player) => {
    player.value = currentPlayer
  }

  return { player, setPlayer }
})
