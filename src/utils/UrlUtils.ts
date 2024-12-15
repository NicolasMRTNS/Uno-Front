import { CREATE_GAME_URL, JOIN_GAME_URL } from '@/constants/UrlConstants'

// REST
export const getMainUrl = (): string => import.meta.env.VITE_BASE_URL

export const getCreateGameUrl = (username: string): string =>
  getMainUrl() + `${CREATE_GAME_URL}/${username}`

export const getJoinGameUrl = (username: string, gameId: string): string =>
  getMainUrl() + `${JOIN_GAME_URL}/${gameId}/${username}`

// WebSocket
export const getMainWebSocketUrl = (): string => import.meta.env.VITE_WEBSOCKET_BASE_URL
