import React from 'react'

import { cn } from '@/lib/utils'

export const Microphone = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      {...props}
      className={cn('text-[#231F20]', props.className)}
    >
      <g>
        <path
          fill="currentColor"
          d="M32,44c6.629,0,12-5.371,12-12V12c0-6.629-5.371-12-12-12S20,5.371,20,12v20C20,38.629,25.371,44,32,44z"
        />
        <path
          fill="currentColor"
          d="M52,28c-2.211,0-4,1.789-4,4c0,8.836-7.164,16-16,16s-16-7.164-16-16c0-2.211-1.789-4-4-4s-4,1.789-4,4
		c0,11.887,8.656,21.73,20,23.641V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-4.359C47.344,53.73,56,43.887,56,32
		C56,29.789,54.211,28,52,28z"
        />
      </g>
    </svg>
  )
}
