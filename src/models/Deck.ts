import type { Card } from './Card'

export interface Deck {
  cards: Array<Card>
  isPlayerDeck: boolean
}
