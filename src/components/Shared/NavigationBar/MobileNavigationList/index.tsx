import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

import { DrawerTrigger } from '@/components/Icons'
import { navigationItems } from '@/constants/navigationItems'
import { cn } from '@/lib/utils'

import { ListItem } from '../ListItem'

export const MobileNavigationList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showGenres, setShowGenres] = useState(false)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isOpen])

  const handleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex items-center md:hidden">
      <button
        onClick={() => handleDrawer()}
        className="px-2"
      >
        <DrawerTrigger
          className={cn(
            'text-white transition-all',
            isOpen ? 'rotate-90 text-accent' : '',
          )}
        />
      </button>
      <div
        className={cn(
          'absolute bottom-0 left-0 top-full z-50 flex h-[calc(100vh-4rem)] w-screen transition-transform',
          isOpen ? '' : '-translate-x-full',
        )}
      >
        <div className="h-full w-full !overflow-auto bg-black/70 font-rubik sm:max-w-[300px]">
          <h1 className="px-6 py-2 text-gray-600">Browse</h1>
          <ul className="flex flex-col justify-center gap-4 p-4 lg:p-6">
            {navigationItems.Discover.map((navItem) => (
              <ListItem
                href={`/${navItem}`}
                title={navItem}
                key={navItem}
              />
            ))}
          </ul>
          <button
            className="flex w-full justify-between px-6 py-2 text-gray-600 hover:bg-accent/50"
            onClick={() => setShowGenres(!showGenres)}
          >
            <h1 className="">Genres</h1>
            <ChevronDown
              className={cn(
                'transition-transform',
                showGenres ? 'rotate-180' : '',
              )}
            />
          </button>
          {showGenres && (
            <ul className="flex flex-col justify-center gap-4 bg-accent/15 p-4 lg:p-6">
              {navigationItems.genre.map((genre) => (
                <ListItem
                  href={`/genres/${genre}`}
                  title={genre}
                  key={genre}
                />
              ))}
            </ul>
          )}
        </div>
        <div
          className="grow bg-black/40 blur-xl"
          onClick={() => handleDrawer()}
        />
      </div>
    </div>
  )
}
