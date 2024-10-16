'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../ui/button'

export function ImageCarousel() {
  const slides = [
    {
      id: 1,
      imgSrc:
        'https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg',
    },
    {
      id: 2,
      imgSrc:
        'https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645809.jpg',
    },
    {
      id: 3,
      imgSrc:
        'https://i.pinimg.com/originals/81/1a/3b/811a3b5e0eb3df1635bfb8081436114e.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://i.pinimg.com/originals/81/1a/3b/811a3b5e0eb3df1635bfb8081436114e.jpg',
    },
    {
      id: 5,
      imgSrc:
        'https://i.pinimg.com/originals/81/1a/3b/811a3b5e0eb3df1635bfb8081436114e.jpg',
    },
    {
      id: 6,
      imgSrc:
        'https://i.pinimg.com/originals/81/1a/3b/811a3b5e0eb3df1635bfb8081436114e.jpg',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(2)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleNextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % slides.length)
      setIsTransitioning(false)
    }, 200)
  }

  const handlePreviousSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <div className="h-[500px] w-full bg-black">
      <div className="relative h-full w-full">
        <img
          src={slides[currentIndex].imgSrc}
          alt={`Slide ${currentIndex + 1}`}
          className={`h-full w-full object-cover transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        />
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
        <div className="absolute flex space-x-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-2 rounded-full ${currentIndex === index ? 'w-16 bg-purple-600 dark:bg-purple-500' : 'w-8 bg-gray-600'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
