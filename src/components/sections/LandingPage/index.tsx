'use client'

import { AuthDialog } from '@/components/Shared/AuthDialog'

const LandingPage = () => {
  return (
    <div className="relative flex h-screen items-center justify-center bg-black">
      <video
        autoPlay
        muted
        loop
        className="absolute h-full w-full object-cover opacity-60"
      >
        <source
          src="/videos/background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col gap-5 text-center text-white drop-shadow-lg">
        <h1 className="font-bold ~text-5xl/8xl">Welcome to Anitube</h1>
        <div className="mx-auto w-4/5 ~text-lg/2xl md:w-full">
          <p>
            A lesson without pain is meaningless. That’s because you cannot gain
            something without sacrificing something else in return.
          </p>
          <p>- Welcome to the world of anime</p>
        </div>
        <AuthDialog />
      </div>
    </div>
  )
}

export { LandingPage }
