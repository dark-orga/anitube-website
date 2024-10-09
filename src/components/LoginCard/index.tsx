'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'
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
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  forgotPasswordSchema,
  loginSchema,
  signUpSchema,
} from '@/schemas/authSchemas'
import {
  ForgotPasswordForm,
  LoginCardProps,
  LoginForm,
  SignUpForm,
} from '@/types/auth'

const LoginCard: React.FC<LoginCardProps> = ({ type, setType }) => {
  const loginMethods = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  })
  const signUpMethods = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema as any),
  })
  const forgotPasswordMethods = useForm<ForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordSchema),
  })

  const onLoginSubmit: SubmitHandler<LoginForm> = (data) => {
    JSON.stringify(data)
  }

  const onSignUpSubmit: SubmitHandler<SignUpForm> = (data) => {
    JSON.stringify(data)
  }

  const onForgotPasswordSubmit: SubmitHandler<ForgotPasswordForm> = (data) => {
    JSON.stringify(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-8 py-6 w-fit mx-auto text-xl bg-purple-800 hover:bg-purple-900 rounded-md">
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
              alt="Animated GIF"
              width={320}
              height={100}
            />
          </div>
        )}
        <Card className="sm:w-[55%] w-[90%] items-center border-none shadow-none">
          <CardHeader className="flex gap-2 items-center">
            <CardTitle className="text-purple-800">
              {type === 'login'
                ? 'Login'
                : type === 'register'
                  ? 'Register'
                  : 'Reset Password'}
            </CardTitle>
            <CardDescription>
              {type === 'login'
                ? 'Anitube - a better place to watch anime online for free'
                : type === 'register'
                  ? 'When becoming members of the site, you could use the full range of functions.'
                  : 'We will send an email to your box, just follow that link to set your new password.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-4">
                <div className="grid w-full items-center gap-4">
                  {type === 'register' && (
                    <div className="grid w-full max-w-sm items-center">
                      <Input
                        {...signUpMethods.register('username')}
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="bg-purple-200 hover:bg-purple-300"
                      />
                      <p className="text-sm text-red-500">
                        {(signUpMethods.formState.errors.username
                          ?.message as string) || null}
                      </p>
                    </div>
                  )}
                  <div className="grid w-full max-w-sm items-center">
                    <Input
                      {...(type === 'login'
                        ? loginMethods.register('email')
                        : type === 'register'
                          ? signUpMethods.register('email')
                          : forgotPasswordMethods.register('email'))}
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="bg-purple-200 hover:bg-purple-300"
                    />
                    <p className="text-sm text-red-500">
                      {type === 'login'
                        ? (loginMethods.formState.errors.email
                            ?.message as string) || null
                        : type === 'register'
                          ? (signUpMethods.formState.errors.email
                              ?.message as string) || null
                          : (forgotPasswordMethods.formState.errors.email
                              ?.message as string) || null}
                    </p>
                  </div>
                  {type !== 'reset' && (
                    <div className="grid w-full max-w-sm items-center">
                      <Input
                        {...(type === 'login'
                          ? loginMethods.register('password')
                          : signUpMethods.register('password'))}
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="bg-purple-200 hover:bg-purple-300"
                      />
                      <p className="text-sm text-red-500">
                        <p>
                          {type === 'login'
                            ? (loginMethods.formState.errors.password
                                ?.message as string) || null
                            : (signUpMethods.formState.errors.password
                                ?.message as string) || null}
                        </p>
                      </p>
                    </div>
                  )}
                  {type === 'register' && (
                    <div className="grid w-full max-w-sm items-center ">
                      <Input
                        {...signUpMethods.register('confirmPassword')}
                        type="password"
                        id="confirm-password"
                        placeholder="Confirm Password"
                        className="bg-purple-200 hover:bg-purple-300"
                      />
                      <p className="text-sm text-red-500">
                        {(signUpMethods.formState.errors.confirmPassword
                          ?.message as string) || null}
                      </p>
                    </div>
                  )}
                  {type === 'login' && (
                    <CardDescription>
                      <span
                        className="cursor-pointer text-purple-700 hover:text-purple-800"
                        onClick={() => setType('reset')}
                      >
                        Forgot your password?
                      </span>
                    </CardDescription>
                  )}
                </div>
                {type === 'login' && (
                  <>
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
                      >
                        <Mail className="h-4 w-4 mr-2" /> Gmail
                      </Button>
                      <Button
                        className="w-full hover:bg-gray-200"
                        variant="outline"
                      >
                        <Si42 className="h-4 w-4 mr-1" /> Intra
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 justify-center w-full">
            <Button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800"
              onClick={() => {
                if (type === 'login') {
                  loginMethods.handleSubmit(onLoginSubmit)()
                } else if (type === 'register') {
                  signUpMethods.handleSubmit(onSignUpSubmit)()
                } else {
                  forgotPasswordMethods.handleSubmit(onForgotPasswordSubmit)()
                }
              }}
            >
              {type === 'login'
                ? 'Login'
                : type === 'register'
                  ? 'Create Account'
                  : 'Reset Password'}
            </Button>
            <CardDescription className="text-center">
              {type === 'login'
                ? 'Don’t have an account?'
                : type === 'register'
                  ? 'Already have an account?'
                  : 'Try to login again.'}
              <span
                className="cursor-pointer text-purple-700 hover:text-purple-800"
                onClick={() => {
                  setType(type === 'login' ? 'register' : 'login')
                  forgotPasswordMethods.reset()
                  loginMethods.reset()
                  signUpMethods.reset()
                }}
              >
                {type === 'login' ? ' Register' : ' Login'}
              </span>
            </CardDescription>
          </CardFooter>
        </Card>
        {type === 'login' && (
          <div className="hidden sm:flex sm:grow relative overflow-hidden items-center justify-center rounded-lg bg-red-200">
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
export { LoginCard }
