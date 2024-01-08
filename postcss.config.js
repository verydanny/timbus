import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/** @type { import('postcss-load-config').Config } */
export default ({ env }) => ({
  plugins: [
    tailwind(),
    ...(process.env.NODE_ENV === 'production' ? [autoprefixer] : []),
  ],
})
