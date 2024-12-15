import { ref } from 'vue'

export const useWebSocketHandler = () => {
  const socket = ref<WebSocket | undefined>(undefined)
}
