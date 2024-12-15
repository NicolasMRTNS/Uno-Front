import { useGameStore } from '@/stores/game'
import { getConnectionWebSocketUrl } from '@/utils/UrlUtils'
import { ref } from 'vue'

export const useWebSocketHandler = () => {
  const { setGame } = useGameStore()

  const socket = ref<WebSocket | undefined>(undefined)

  const connect = (username: string, gameId: string): void => {
    socket.value = new WebSocket(getConnectionWebSocketUrl(username, gameId))

    socket.value.onopen = () => {
      console.log('WebSocket connection OK')
    }

    socket.value.onmessage = (event) => {
      const updatedGame = event.data
      setGame(updatedGame)
      console.log('Updated game: ', updatedGame)
    }

    socket.value.onerror = (error) => {
      console.error('WebSocket error: ', error)
    }

    socket.value.onclose = () => {
      console.log('WebSocket connection closed')
    }
  }

  const sendMessage = (message: object): void => {
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      socket.value.send(JSON.stringify(message))
    }
  }

  const disconnect = (): void => {
    if (socket.value) {
      socket.value.close()
      socket.value = undefined
      setGame(undefined)
    }
  }

  return { connect, sendMessage, disconnect }
}
