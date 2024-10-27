import '../styles/global.css'
import { Rubik } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

const boldenVan = localFont({
  src: [
    {
      path: '../../public/fonts/BoldenVan.ttf',
      weight: '400',
    },
  ],
  variable: '--font-boldenVan',
})

const dkb = localFont({
  src: [
    {
      path: '../../public/fonts/DragonKidsBroke.otf',
      weight: '400',
    },
  ],
  variable: '--font-dragon-kids-broke',
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rubik',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(boldenVan.variable, dkb.variable, rubik.variable)}>
        {children}
      </body>
    </html>
  )
}
