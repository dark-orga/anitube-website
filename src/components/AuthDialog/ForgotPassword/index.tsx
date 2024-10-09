'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

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
import { forgotPasswordSchema } from '@/schemas/authSchemas'
import { ForgotPasswordForm } from '@/types/auth'

interface AuthDialogProps {
  switchToLogin: () => void
}

const ForgotPassword: React.FC<AuthDialogProps> = ({ switchToLogin }) => {
  const forgotPasswordMethods = useForm<ForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordSchema),
  })

  const onForgotPasswordSubmit: SubmitHandler<ForgotPasswordForm> = useCallback(
    (data) => {
      JSON.stringify(data)
    },
    [],
  )

  return (
    <div className="flex w-full gap-4">
      <div className="hidden sm:flex sm:grow items-center justify-center rounded-lg">
        <Image
          src="/images/passwordReset.png"
          alt="Illustration"
          width={320}
          height={320}
        />
      </div>
      <Card className="sm:w-[55%] w-[90%] items-center border-none shadow-none">
        <CardHeader className="flex gap-2 items-center">
          <CardTitle className="text-purple-800">Reset Password</CardTitle>
          <CardDescription>
            We will send an email to your box, just follow that link to set your
            new password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={forgotPasswordMethods.handleSubmit(
              onForgotPasswordSubmit,
            )}
          >
            <div className="grid w-full max-w-sm items-center">
              <Input
                {...forgotPasswordMethods.register('email')}
                type="email"
                id="email"
                placeholder="Email"
                className="bg-purple-200 hover:bg-purple-300"
              />
              <p className="text-sm text-red-500">
                {forgotPasswordMethods.formState.errors.email?.message || ''}
              </p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 justify-center w-full">
          <Button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800"
            onClick={forgotPasswordMethods.handleSubmit(onForgotPasswordSubmit)}
          >
            Reset Password
          </Button>
          <CardDescription className="text-center">
            Try to
            <span
              className="cursor-pointer text-purple-700 hover:text-purple-800"
              onClick={switchToLogin}
            >
              {' login again.'}
            </span>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ForgotPassword
