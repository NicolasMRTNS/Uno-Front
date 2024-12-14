import { useErrorHandler } from '@/composables/errorHandler'
import type { Game } from '@/models/Game'
import type { Player } from '@/models/Player'
import { getCreateGameUrl } from '@/utils/UrlUtils'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayerStore } from './player'

export const useGameStore = defineStore('game', () => {
  const { handleError } = useErrorHandler()
  const { setPlayer } = usePlayerStore()
  const router = useRouter()

  const game = ref<Game | undefined>(undefined)

  const createGame = async (username: string): Promise<void> => {
    await axios
      .post(getCreateGameUrl(username))
      .then((response) => {
        game.value = response.data
        const currentPlayer = findPlayer(username)
        if (currentPlayer) {
          setPlayer(currentPlayer)
        }
        router.push('/waiting-room')
      })
      .catch((error) => {
        handleError(error)
      })
  }

  const findPlayer = (username: string): Player | undefined => {
    if (game.value) {
      return game.value.players.find((player) => player.name === username)
    }
    return undefined
  }

  return { game, createGame }
})
