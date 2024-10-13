'use client'

import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

export default () => {
  const animationRequestRef = useRef<number>()

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      animationRequestRef.current = requestAnimationFrame(raf)
    }

    animationRequestRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationRequestRef.current!)
      lenis.destroy()
    }
  }, [])

  return <div className="">home</div>
}
