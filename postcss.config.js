import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import purgecss from '@fullhuman/postcss-purgecss'

/** @type { import('postcss-load-config').Config } */
export default ({ env }) => ({
  plugins: [
    tailwind(),
    autoprefixer(),
    purgecss({
      content: ['./src/**/*.svelte'],
      fontFace: true,
      keyframes: true,
      variables: true,
    }),
  ],
})
