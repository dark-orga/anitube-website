export type LoginForm = {
  email: string
}

export type SignUpForm = {
  username: string
  email: string
  password: string
  confirmPassword?: string
}

export type ForgotPasswordForm = {
  email: string
}
