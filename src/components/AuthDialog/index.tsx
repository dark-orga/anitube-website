'use client'

import Image from 'next/image'
import * as React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import ForgotPassword from './ForgotPassword'
import Login from './login'
import SignUp from './SignUp/SignUp'

const AuthDialog = () => {
  const [type, setType] = useState<'login' | 'register' | 'reset'>('login')

  const switchToLogin = () => setType('login')
  const switchToSignUp = () => setType('register')
  const switchToForgotPassword = () => setType('reset')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="~px-6/10 ~py-4/7 w-fit mx-auto ~text-xl/2xl bg-purple-800 hover:bg-purple-900 rounded-md">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="flex justify-center rounded-lg bg-white p-0 sm:max-w-2xl max-w-md">
        {type !== 'login' && (
          <div className="hidden sm:flex sm:grow items-center justify-center rounded-lg">
            <Image
              src={
                type === 'register'
                  ? '/images/signIn.jpeg'
                  : '/images/passwordReset.png'
              }
              alt="Illustration"
              width={320}
              height={320}
            />
          </div>
        )}
        {type === 'login' && (
          <Login
            switchToForgotPassword={switchToForgotPassword}
            switchToSignUp={switchToSignUp}
          />
        )}
        {type === 'register' && <SignUp switchToLogin={switchToLogin} />}
        {type === 'reset' && <ForgotPassword switchToLogin={switchToLogin} />}
        {type === 'login' && (
          <div className="hidden sm:flex sm:grow relative overflow-hidden items-center justify-center rounded-lg ">
            <Image
              src="/images/login.jpeg"
              alt="Animated GIF"
              layout="fill"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export { AuthDialog }
