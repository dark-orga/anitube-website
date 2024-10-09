'use client'

import * as React from 'react'
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
        <Button className="~px-6/10 ~py-4/7 w-fit mx-auto ~text-xl/2xl bg-purple-800 hover:bg-purple-900 rounded-md">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="flex justify-center rounded-lg bg-white p-0 sm:max-w-2xl max-w-md ">
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
