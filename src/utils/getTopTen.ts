'use server'

import { api } from '@/config/api'
import { apiRoutes } from '@/config/apirRoutes'
import { TopTen } from '@/types/animeApi'

interface AniWatchResponse {
  top10Animes: TopTen
}

export const getTopTen = async () => {
  const res = await api.get<AniWatchResponse>(
    apiRoutes.animeApiRoutes.aniwatch.home,
  )

  return res.data.top10Animes
}
