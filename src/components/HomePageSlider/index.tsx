'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

export function ImageCarousel() {
  const slides = [
    {
      id: 1,
      name: 'Attack on Titan',
      logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/CurationAssets/Dragon%20Ball%20DAIMA/SEASON%201/ULTRA-WIDE/DBDaima-S1-KV1-UW-Logo.png',
      description:
        'Eren Yeager is the main character in Attack on Titan, a world where humanity battles against giant humanoid Titans for survival. Naruto Uzumaki, a young ninja with a dream to become the Hokage, must overcome many trials and enemies on his journey.must overcome many trials and enemies on his journey ',
      imgSrc:
        'https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg',
      genres: ['Action', 'Drama', 'Fantasy'],
    },
    {
      id: 3,
      name: 'Fullmetal Alchemist: Brotherhood',
      logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/CurationAssets/Dragon%20Ball%20DAIMA/SEASON%201/ULTRA-WIDE/DBDaima-S1-KV1-UW-Logo.png',
      description:
        "Two brothers, Edward and Alphonse, use alchemy in their quest to find the Philosopher's Stone and restore their bodies. Naruto Uzumaki, a young ninja with a dream to become the Hokage, must overcome many trials and enemies on his journey.",
      imgSrc: 'https://images8.alphacoders.com/119/1195441.jpg',
      genres: ['Action', 'Adventure', 'Drama'],
    },
    {
      id: 4,
      name: 'Death Note',
      logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/Curation Testing/UAT Round 3 testing/MHA-S7-UW-Logo.png',
      description:
        'Light Yagami, a high school student, discovers a notebook that allows him to kill anyone by writing their name in it. Naruto Uzumaki, a young ninja with a dream to become the Hokage, must overcome many trials and enemies on his journey.',
      imgSrc:
        'https://i.pinimg.com/originals/81/1a/3b/811a3b5e0eb3df1635bfb8081436114e.jpg',
      genres: ['Thriller', 'Supernatural', 'Psychological'],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(2)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleNextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % slides.length)
      setWidth(0)
      setIsTransitioning(false)
    }, 400)
  }

  const handlePreviousSlide = () => {
    setIsTransitioning(true)
    setWidth(0)
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
      setWidth(0)
      setIsTransitioning(false)
    }, 400)
  }

  const [width, setWidth] = useState(0)

  useEffect(() => {
    const time = setInterval(() => {
      if (width < 100) setWidth(width + 1)
      else {
        handleNextSlide()
      }
    }, 50)

    return () => {
      clearInterval(time)
    }
  }, [width])

  return (
    <div className="h-[500px] w-full bg-black">
      <div className="relative h-full w-full">
        <img
          src={slides[currentIndex].imgSrc}
          alt={`Slide ${currentIndex + 1}`}
          className={`relative h-full w-full object-cover transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        />
        <div className="absolute left-0 top-0 flex h-full w-4/5 bg-gradient-to-r from-black to-transparent">
          <h1 className="text-sm text-white"></h1>
        </div>
        <Button
          onClick={handlePreviousSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-transparent hover:bg-transparent"
        >
          <ChevronLeft className="h-12 w-12 text-gray-100 drop-shadow-[0_0.3px_0.3px_rgba(0,0,0,1.1)]" />
        </Button>
        <Button
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-transparent hover:bg-transparent"
        >
          <ChevronRight className="h-12 w-12 text-gray-100 drop-shadow-[0_0.3px_0.3px_rgba(0,0,0,1.1)]" />
        </Button>
        <div className="w-100 absolute bottom-20 left-20 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-white">
            {slides[currentIndex].name}
          </h1>
          <p className="text-md text-white">
            {slides[currentIndex].description.slice(0, 277)}
          </p>
          <p className="text-md text-white">
            {slides[currentIndex].genres.join(', ')}
          </p>
          <Button className="w-fit rounded-none bg-purple-800 px-4 text-white hover:bg-purple-700">
            Start Watching now
          </Button>
        </div>
        <div className="absolute bottom-10 left-20 flex w-full transform space-x-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                'h-2 w-8 transform overflow-hidden rounded-full bg-gray-400 duration-300',
                { 'w-16': currentIndex === index },
              )}
            >
              <div
                className={cn(
                  'h-full transform rounded-full bg-gray-300 duration-500 ease-linear',
                  {
                    'bg-purple-800': currentIndex === index,
                  },
                )}
                style={{
                  width: `${currentIndex === index ? width : 0}%`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
