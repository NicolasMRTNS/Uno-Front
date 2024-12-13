import type { GameStateEnum } from '@/enums/GameStateEnum'
import type { Card } from './Card'
import type { Deck } from './Deck'
import type { Player } from './Player'

export interface Game {
  id: string
  players: Array<Player>
  gameDeck: Card
  drawPile: Deck
  state: GameStateEnum
  activePlayer: Player
  reverse: boolean
}
