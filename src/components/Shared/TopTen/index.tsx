import { Loader2 } from 'lucide-react'
import { useState } from 'react'

import { useGetTopTen } from '@/hooks/useGetTopTen'
import { cn } from '@/lib/utils'
import { Anime, TopTen as TopTenType } from '@/types/animeApi'

import { AnimePoster } from './components/AnimePoster'
import { RankOnePoster } from './components/RankOnePoster'

const TOP_TEN = ['Today', 'Week', 'Month'] as const

const dateMap: Record<string, keyof TopTenType> = {
  Today: 'day',
  Week: 'week',
  Month: 'month',
} as const

export const TopTen = () => {
  const [selected, setSelected] = useState<'Today' | 'Week' | 'Month'>('Today')
  const { data, isLoading } = useGetTopTen()

  return (
    <div className="flex min-h-[930px] w-full max-w-xs flex-col gap-5 rounded-lg bg-black/50 py-3 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4">
        <span>Top 10</span>
        <div className="flex gap-2 rounded-md">
          {TOP_TEN.map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={cn('text-white', { 'opacity-30': selected !== item })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Loader2 className="size-4 animate-spin text-primary" />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col gap-2">
          {data?.[dateMap[selected]]?.map((anime, index) =>
            index === 0 ? (
              <RankOnePoster
                key={anime.id}
                anime={anime as Anime}
              />
            ) : (
              <AnimePoster
                key={anime.id}
                anime={anime as Anime}
              />
            ),
          )}
        </div>
      )}
    </div>
  )
}
