import { useErrorHandler } from '@/composables/errorHandler'
import type { Game } from '@/models/Game'
import { getCreateGameUrl } from '@/utils/UrlUtils'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('game', () => {
  const { handleError } = useErrorHandler()

  const game = ref<Game | undefined>(undefined)

  const createGame = async (username: string): Promise<void> => {
    await axios
      .post(getCreateGameUrl(username))
      .then((response) => {
        game.value = response.data
      })
      .catch((error) => {
        handleError(error)
      })
  }

  return { game, createGame }
})
