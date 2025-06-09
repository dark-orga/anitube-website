import Image from 'next/image'

import { CC } from '@/components/Icons/CC'
import { Microphone } from '@/components/Icons/Microphone'
import { cn } from '@/lib/utils'
import { Anime } from '@/types/animeApi'

interface RankOnePosterProps {
  anime: Anime
  className?: string
}

export const RankOnePoster = ({ anime, className }: RankOnePosterProps) => {
  return (
    <div className={cn('relative flex gap-2', className)}>
      <Image
        src={anime?.img ?? ''}
        alt="top-ten"
        width={1920}
        height={1080}
        className="aspect-[2.05] w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 flex w-full items-center gap-3 px-4 py-2">
        <div className="flex aspect-square size-fit w-8 items-center justify-center rounded-sm bg-black/60 text-xl text-white">
          {anime.rank}
        </div>
        <div className="flex flex-col gap-1">
          <span className="leading-[1.2] text-white">{anime.name}</span>
          <div className="flex gap-0.5 text-[8px] leading-[1] text-black">
            <span className="closedCaption flex items-center gap-1 rounded-l-sm bg-green-300/80 px-1 py-px">
              <CC className="size-3" />
              {anime.episodes?.sub ?? '??'}
            </span>
            <span className="flex items-center gap-1 rounded-r-sm bg-cyan-300/80 px-1 py-px">
              <Microphone className="size-2" />
              {anime.episodes?.dub ?? '??'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
