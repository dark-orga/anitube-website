'use client'

import { useQuery } from '@tanstack/react-query'

import { getTopTen } from '@/utils/getTopTen'
import { neverRefetchQuerySettings } from '@/utils/querySettings'

export const useGetTopTen = () => {
  return useQuery({
    queryKey: ['top-ten'],
    queryFn: async () => await getTopTen(),
    ...neverRefetchQuerySettings,
  })
}
