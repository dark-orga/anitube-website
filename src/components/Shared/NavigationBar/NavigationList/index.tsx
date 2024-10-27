import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { navigationItems } from '@/constants/navigationItems'
import { cn } from '@/lib/utils'

import { ListItem } from '../ListItem'

interface NavigationListProps {
  className?: string
}

export const NavigationList = ({ className }: NavigationListProps) => {
  return (
    <NavigationMenuList
      className={cn('hidden max-w-max font-rubik md:block', className)}
    >
      <NavigationMenuViewport className="top-2 flex origin-top-left bg-accent/5" />
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50">
          Browse
        </NavigationMenuTrigger>
        <NavigationMenuContent className="flex gap-4 md:w-[550px]">
          <ul className="flex flex-col justify-center gap-3 p-4 lg:p-6">
            {navigationItems.Discover.map((navItem) => (
              <ListItem
                href={`/${navItem}`}
                title={navItem}
                key={navItem}
              />
            ))}
          </ul>
          <div className="my-2 border-l" />
          <div className="flex flex-col gap-4 p-4 lg:p-6">
            <h1 className="">Genres</h1>
            <ul className="grid grid-cols-3 gap-3">
              {navigationItems.genre.map((genre) => (
                <ListItem
                  href={`/genres/${genre}`}
                  title={genre}
                  key={genre}
                />
              ))}
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  )
}
