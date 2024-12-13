import type { CardColorEnum } from '@/enums/CardColorEnum'
import type { CardValueEnum } from '@/enums/CardValueEnum'

export interface Card {
  value: CardValueEnum
  color: CardColorEnum
}
