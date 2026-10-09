export interface IProduct {
  id: number
  slug: string
  nameBn: string
  category: string
  categoryNameBn: string
  categoryIcon: string
  unit: string
  image: string
  today: number
  yesterday: number
  lastWeek: number
  lastMonth: number
  change: Change
  markets: Markets[]
}

interface Change {
  dir: string
  pct: number
}

interface Markets {
  market: string
  division: string
  min: number
  max: number
}