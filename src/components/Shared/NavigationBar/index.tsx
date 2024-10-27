'use client'

import { LogOutIcon } from 'lucide-react'

import { Container } from '@/components/System/Container'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { NavigationMenu } from '@/components/ui/navigation-menu'

import { Logo } from '../Logo'
import { MobileNavigationList } from './MobileNavigationList'
import { NavigationList } from './NavigationList'

export const NavigationBar = () => {
  const handleLogOut = () => {
    console.log('Logging out') // TODO: implement Logout logic
  }

  return (
    <NavigationMenu className="mx-auto h-[4rem] w-full max-w-none bg-black bg-opacity-50">
      <Container className="flex items-center justify-between px-1 md:px-4">
        <div className="flex gap-3 md:gap-6">
          <MobileNavigationList />
          <Logo />
          <NavigationList />
        </div>

        <div className="flex">
          <Avatar className="z-10 hover:cursor-pointer">
            <AvatarImage src="/images/avatar.webp" />
            <AvatarFallback>PF</AvatarFallback>
          </Avatar>
          <div className="my-0.5 flex -translate-x-4 items-center rounded-r-md border pl-4 pr-1">
            <button onClick={() => handleLogOut()}>
              <LogOutIcon />
            </button>
          </div>
        </div>
      </Container>
    </NavigationMenu>
  )
}
