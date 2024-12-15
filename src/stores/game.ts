import { useErrorHandler } from '@/composables/errorHandler'
import { useWebSocketHandler } from '@/composables/webSocketHandler'
import { WAITING_ROOM_ROUTER_URL } from '@/constants/RouterConstants'
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
  const { connect } = useWebSocketHandler()
  const router = useRouter()

  const game = ref<Game | undefined>(undefined)
  const setGame = (gameUpdated: Game | undefined): void => {
    game.value = gameUpdated
  }

  const findPlayer = (username: string): Player | undefined => {
    if (game.value) {
      return game.value.players.find((player) => player.name === username)
    }
    return undefined
  }

  const setCurrentPlayer = (username: string): void => {
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
        const game: Game = response.data
        joinGame(username, game.id)
      })
      .catch((error) => {
        handleError(error)
      })
  }

  const joinGame = (username: string, gameId: string): void => {
    connect(username, gameId)
    setCurrentPlayer(username)
  }

  return { game, setGame, createGame, joinGame }
})
