import { useErrorHandler } from '@/composables/errorHandler'
import { WAITING_ROOM_ROUTER_URL } from '@/constants/RouterConstants'
import type { Game } from '@/models/Game'
import type { Player } from '@/models/Player'
import { getCreateGameUrl, getJoinGameUrl } from '@/utils/UrlUtils'
import axios, { type AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayerStore } from './player'

export const useGameStore = defineStore('game', () => {
  const { handleError } = useErrorHandler()
  const { setPlayer } = usePlayerStore()
  const router = useRouter()

  const game = ref<Game | undefined>(undefined)

  const findPlayer = (username: string): Player | undefined => {
    if (game.value) {
      return game.value.players.find((player) => player.name === username)
    }
    return undefined
  }

  const setGameAndPlayer = (response: AxiosResponse, username: string): void => {
    game.value = response.data
    const currentPlayer = findPlayer(username)
    if (currentPlayer) {
      setPlayer(currentPlayer)
    }
    router.push(WAITING_ROOM_ROUTER_URL)
  }

  const createGame = async (username: string): Promise<void> => {
    await axios
      .post(getCreateGameUrl(username))
      .then((response) => {
        setGameAndPlayer(response, username)
      })
      .catch((error) => {
        handleError(error)
      })
  }

  const joinGame = async (username: string, gameId: string): Promise<void> => {
    await axios
      .post(getJoinGameUrl(username, gameId))
      .then((response) => {
        setGameAndPlayer(response, username)
      })
      .catch((error) => {
        handleError(error)
      })
  }

  return { game, createGame, joinGame }
})
