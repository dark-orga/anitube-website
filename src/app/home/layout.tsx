import Image from 'next/image'

import Background from '@/../public/home/background.jpg'
import { NavigationBar } from '@/components/Shared/NavigationBar'
import { Container } from '@/components/System/Container'

export default ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className="fixed inset-0">
        <Image
          src={Background}
          alt="background"
          fill
          priority
          placeholder="blur"
          className="object-cover opacity-20"
        />
      </div>
      <NavigationBar />
      <div className="relative">
        <Container className="min-h-screen">{children}</Container>
      </div>
    </>
  )
}
