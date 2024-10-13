import Image from 'next/image'

import Background from '@/../public/home/background.jpg'
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
          className="object-cover opacity-40 blur-lg"
        />
      </div>
      <div className="relative">
        <Container className="min-h-screen">{children}</Container>
      </div>
    </>
  )
}
