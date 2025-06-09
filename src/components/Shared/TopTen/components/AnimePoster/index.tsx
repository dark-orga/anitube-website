import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { CC } from '@/components/Icons/CC'
import { Microphone } from '@/components/Icons/Microphone'
import { cn } from '@/lib/utils'
import { Anime } from '@/types/animeApi'

interface AnimePosterProps {
  anime: Anime
  className?: string
}

export const AnimePoster = ({ anime, className }: AnimePosterProps) => {
  return (
    <div className={cn('flex w-full items-center gap-3 px-4 py-2', className)}>
      <div className="flex aspect-square size-fit w-8 items-center justify-center rounded-sm border border-white/60 text-xl text-white/60">
        {anime.rank}
      </div>
      <div className="relative h-[73px] w-12 overflow-hidden rounded-[2px]">
        <Image
          src={anime?.img ?? ''}
          alt={`top-${anime.rank}`}
          width={1920}
          height={1080}
          className="size-full object-cover"
        />
      </div>
      <div className="flex max-w-[184px] grow flex-col gap-1">
        <Link
          href={`/anime/${anime.id}`}
          className="text-[12px] leading-[1.2] text-white transition-colors duration-150 hover:text-primary"
        >
          {anime.name}
        </Link>
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
  )
}
