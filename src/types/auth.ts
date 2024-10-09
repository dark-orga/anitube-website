export interface LoginCardProps {
  type: string
  setType: React.Dispatch<React.SetStateAction<string>>
}

export type LoginForm = {
  email: string
  password: string
}

export type SignUpForm = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export type ForgotPasswordForm = {
  email: string
}
