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
import { signUpSchema } from '@/schemas/authSchemas'
import { SignUpForm } from '@/types/auth'

interface AuthDialogProps {
  switchToLogin: () => void
}

const SignUp: React.FC<AuthDialogProps> = ({ switchToLogin }) => {
  const signUpMethods = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema),
  })

  const onSignUpSubmit: SubmitHandler<SignUpForm> = useCallback((data) => {
    JSON.stringify(data)
  }, [])

  return (
    <Card className="items-center border-none shadow-none">
      <CardHeader className="flex items-center gap-2">
        <CardTitle>Register</CardTitle>
        <CardDescription>
          When becoming members of the site, you could use the full range of
          functions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={signUpMethods.handleSubmit(onSignUpSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center">
              <Input
                {...signUpMethods.register('username')}
                type="text"
                id="username"
                placeholder="Username"
              />
              {signUpMethods.formState.errors.username?.message && (
                <span className="text-sm text-red-500">
                  {signUpMethods.formState.errors.username?.message}
                </span>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center">
              <Input
                {...signUpMethods.register('email')}
                type="email"
                id="email"
                placeholder="Email"
              />
              {signUpMethods.formState.errors.email?.message && (
                <span className="text-sm text-red-500">
                  {signUpMethods.formState.errors.email?.message}
                </span>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center">
              <Input
                {...signUpMethods.register('password')}
                type="password"
                id="password"
                placeholder="Password"
              />
              {signUpMethods.formState.errors.password?.message && (
                <span className="text-sm text-red-500">
                  {signUpMethods.formState.errors.password?.message}
                </span>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center">
              <Input
                {...signUpMethods.register('confirmPassword')}
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
              />
              {signUpMethods.formState.errors.confirmPassword?.message && (
                <span className="text-sm text-red-500">
                  {signUpMethods.formState.errors.confirmPassword?.message}
                </span>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex w-full flex-col justify-center gap-2">
        <Button
          type="submit"
          className="w-full"
          onClick={signUpMethods.handleSubmit(onSignUpSubmit)}
        >
          Create Account
        </Button>
        <CardDescription className="text-center">
          Already have an account?{' '}
          <span
            className="cursor-pointer text-purple-700 hover:text-purple-800"
            onClick={switchToLogin}
          >
            Login
          </span>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default SignUp
