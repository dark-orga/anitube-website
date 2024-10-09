'use client'

import { yupResolver } from '@hookform/resolvers/yup'
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
    resolver: yupResolver(signUpSchema as any),
  })

  const onSignUpSubmit: SubmitHandler<SignUpForm> = (data) => {
    JSON.stringify(data)
  }

  return (
    <Card className="sm:w-[55%] w-[90%] items-center border-none shadow-none">
      <CardHeader className="flex gap-2 items-center">
        <CardTitle className="text-purple-800">Register</CardTitle>
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
                className="bg-purple-200 hover:bg-purple-300"
              />
              <p className="text-sm text-red-500">
                {signUpMethods.formState.errors.username?.message || ''}
              </p>
            </div>
            <div className="grid w-full max-w-sm items-center">
              <Input
                {...signUpMethods.register('email')}
                type="email"
                id="email"
                placeholder="Email"
                className="bg-purple-200 hover:bg-purple-300"
              />
              <p className="text-sm text-red-500">
                {signUpMethods.formState.errors.email?.message || ''}
              </p>
            </div>
            <div className="grid w-full max-w-sm items-center">
              <Input
                {...signUpMethods.register('password')}
                type="password"
                id="password"
                placeholder="Password"
                className="bg-purple-200 hover:bg-purple-300"
              />
              <p className="text-sm text-red-500">
                {signUpMethods.formState.errors.password?.message || ''}
              </p>
            </div>
            <div className="grid w-full max-w-sm items-center">
              <Input
                {...signUpMethods.register('confirmPassword')}
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="bg-purple-200 hover:bg-purple-300"
              />
              <p className="text-sm text-red-500">
                {signUpMethods.formState.errors.confirmPassword?.message || ''}
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 justify-center w-full">
        <Button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800"
          onClick={signUpMethods.handleSubmit(onSignUpSubmit)}
        >
          Create Account
        </Button>
        <CardDescription className="text-center">
          Already have an account?
          <span
            className="cursor-pointer text-purple-700 hover:text-purple-800"
            onClick={switchToLogin}
          >
            {' Login'}
          </span>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default SignUp
