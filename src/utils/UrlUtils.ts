import { CREATE_GAME_URL } from '@/constants/UrlConstants'

export const getMainUrl = (): string => {
  return import.meta.env.VITE_BASE_URL
}
export const getCreateGameUrl = (username: string): string => {
  return getMainUrl() + `${CREATE_GAME_URL}/${username}`
}
