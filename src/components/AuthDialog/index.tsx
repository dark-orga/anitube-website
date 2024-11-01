'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import ForgotPassword from './ForgotPassword'
import Login from './login'
import SignUp from './SignUp'

const AuthDialog = () => {
  const [type, setType] = useState<'login' | 'register' | 'reset'>('login')

  const switchToLogin = () => setType('login')
  const switchToSignUp = () => setType('register')
  const switchToForgotPassword = () => setType('reset')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-auto w-fit rounded-md bg-purple-800 ~text-xl/2xl ~px-6/10 ~py-4/7 hover:bg-purple-900">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-w-md justify-center rounded-lg bg-white p-0 text-black sm:max-w-2xl">
        {type === 'login' && (
          <Login
            switchToForgotPassword={switchToForgotPassword}
            switchToSignUp={switchToSignUp}
          />
        )}
        {type === 'register' && <SignUp switchToLogin={switchToLogin} />}
        {type === 'reset' && <ForgotPassword switchToLogin={switchToLogin} />}
      </DialogContent>
    </Dialog>
  )
}

export { AuthDialog }
