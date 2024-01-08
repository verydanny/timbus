const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')

/** @type { import('postcss-load-config').Config } */
module.exports = ({ env }) => {
  return {
    plugins: [tailwind(), autoprefixer()],
  }
  // plugins: {
  //   tailwindcss: {},
  //   autoprefixer: {},
  //   ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  //   ...(process.env.NODE_ENV === 'production' ?
  //     {
  //       '@fullhuman/postcss-purgecss': {
  //         content: ['./src/**/*.svelte'],
  //         fontFace: true,
  //         keyframes: true,
  //         variables: true,
  //       },
  //     }
  //   : {}),
  // },
}
