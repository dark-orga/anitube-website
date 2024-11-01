import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Enter an email address'),
  password: yup.string().required('Enter a password'),
})

export const signUpSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
})
