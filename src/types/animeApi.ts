/**  Aniwatch  **/

export interface Anime {
  id?: string
  name?: string
  img?: string
  episodes?: {
    eps?: number
    sub?: number
    dub?: number
  }
  duration?: string
  rated?: boolean
  rank?: number
}

export interface TopTen {
  day: Anime[]
  week: Anime[]
  month: Anime[]
}
