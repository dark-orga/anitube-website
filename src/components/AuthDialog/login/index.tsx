'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Si42 } from 'react-icons/si'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { loginSchema } from '@/schemas/authSchemas'
import { LoginForm } from '@/types/auth'

interface AuthDialogProps {
  switchToForgotPassword: () => void
  switchToSignUp: () => void
}

const Login: React.FC<AuthDialogProps> = ({
  switchToForgotPassword,
  switchToSignUp,
}) => {
  const loginMethods = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  })

  const onLoginSubmit: SubmitHandler<LoginForm> = useCallback((data) => {
    JSON.stringify(data)
  }, [])

  return (
    <div className="flex w-full gap-4">
      <Card className="sm:w-[55%] w-[100%] items-center border-none shadow-none ">
        <CardHeader className="flex gap-2 items-center">
          <CardTitle className="text-purple-800">Login</CardTitle>
          <CardDescription>
            Anitube - a better place to watch anime online for free
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <div className="grid w-full items-center gap-4">
                <div className="grid w-full max-w-sm items-center">
                  <Input
                    {...loginMethods.register('email')}
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="bg-purple-200 hover:bg-purple-300"
                  />
                  <p className="text-sm text-red-500">
                    {loginMethods.formState.errors.email?.message || ''}
                  </p>
                </div>
                <div className="grid w-full max-w-sm items-center">
                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="bg-purple-200 hover:bg-purple-300"
                  />
                </div>
                <CardDescription>
                  <span
                    className="cursor-pointer text-purple-700 hover:text-purple-800"
                    onClick={switchToForgotPassword}
                  >
                    Forgot your password?
                  </span>
                </CardDescription>
              </div>
              <div className="flex py-2 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">
                  Or Continue With
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex w-full gap-6">
                <Button
                  className="w-full hover:bg-gray-200"
                  variant="outline"
                  onClick={() => {}}
                >
                  <Mail className="h-4 w-4 mr-2" /> Gmail
                </Button>
                <Button
                  className="w-full hover:bg-gray-200"
                  variant="outline"
                  onClick={() => {}}
                >
                  <Si42 className="h-4 w-4 mr-1" /> Intra
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 justify-center w-full">
          <Button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800"
            onClick={loginMethods.handleSubmit(onLoginSubmit)}
          >
            Login
          </Button>
          <CardDescription className="text-center">
            Don’t have an account?
            <span
              className="cursor-pointer text-purple-700 hover:text-purple-800"
              onClick={switchToSignUp}
            >
              {' Register'}
            </span>
          </CardDescription>
        </CardFooter>
      </Card>
      <div className="hidden sm:flex sm:grow relative overflow-hidden items-center justify-center rounded-lg bg-purple-500">
        <Image
          src="/images/login.jpeg"
          alt="Animated GIF"
          layout="fill"
        />
      </div>
    </div>
  )
}

export default Login
