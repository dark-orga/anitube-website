import { nextui } from '@nextui-org/theme'
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'move-up-down': 'moveUpDown 4s ease-in-out infinite',
      },
      keyframes: {
        moveUpDown: {
          '50%': { transform: 'translateY(-50px)' },
        },
      },
    },
  },

  plugins: [
    fluid({
      checkSC144: false,
    }),
    nextui({}),
  ],
}

export default config
