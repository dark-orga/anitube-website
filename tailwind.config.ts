import fluid, { extract, fontSize, screens } from 'fluid-tailwind'

const config = {
  content: {
    files: [
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
  },
  plugins: [fluid],
}
export default config
