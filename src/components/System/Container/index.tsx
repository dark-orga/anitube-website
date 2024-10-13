import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const containerStyles = cva('px-4 lg:px-8 w-full h-full', {
  variants: {
    type: {
      fluid: 'w-full',
      fixed: '~max-w-[56rem]/[84rem] mx-auto',
    },
  },
  defaultVariants: {
    type: 'fixed',
  },
})

type DivProps = HTMLAttributes<HTMLDivElement>

export type ContainerProps = DivProps & VariantProps<typeof containerStyles>
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ type, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerStyles({ type, className }))}
      {...props}
    />
  ),
)
