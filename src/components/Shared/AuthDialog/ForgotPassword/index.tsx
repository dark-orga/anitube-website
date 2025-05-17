'use client'

import { yupResolver } from '@hookform/resolvers/yup'
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
    <Card className="items-center border-none shadow-none">
      <CardHeader className="flex items-center gap-2">
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>
          We will send an email to your box, just follow that link to set your
          new password.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={forgotPasswordMethods.handleSubmit(onForgotPasswordSubmit)}
        >
          <div className="grid w-full max-w-sm items-center">
            <Input
              {...forgotPasswordMethods.register('email')}
              type="email"
              id="email"
              placeholder="Email"
            />
            {forgotPasswordMethods.formState.errors.email?.message && (
              <span className="text-sm text-red-500">
                {forgotPasswordMethods.formState.errors.email?.message}
              </span>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex w-full flex-col justify-center gap-2">
        <Button
          type="submit"
          className="w-full"
          onClick={forgotPasswordMethods.handleSubmit(onForgotPasswordSubmit)}
        >
          Reset Password
        </Button>
        <CardDescription className="text-center">
          Try to{' '}
          <span
            className="cursor-pointer text-purple-700 hover:text-purple-800"
            onClick={switchToLogin}
          >
            login again.
          </span>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default ForgotPassword
