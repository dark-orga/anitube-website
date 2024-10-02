'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const LandingPage = () => {
  const router = useRouter()

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover opacity-60"
      >
        <source

          // We still need to find a better video here later on
          src="/videos/background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col text-center text-white gap-5 drop-shadow-lg">
        <h1 className="~text-5xl/8xl font-bold">Welcome to Anitube</h1>
        <div className="~text-lg/2xl mx-auto w-4/5 md:w-full">
          <p>
            A lesson without pain is meaningless. That’s because you cannot gain
            something without sacrificing something else in return.
          </p>
          <p>- Welcome to the world of anime</p>
        </div>
        <Button
          color="secondary"
          className="px-10 py-6 w-fit mx-auto text-xl"
          onClick={() => {
            router.push('/login')
          }}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export { LandingPage }
