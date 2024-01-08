/** @type { import('postcss-load-config').Config } */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    ...(process.env.NODE_ENV === 'production' ?
      {
        '@fullhuman/postcss-purgecss': {
          content: ['./src/**/*.svelte'],
          fontFace: true,
          keyframes: true,
          variables: true,
        },
      }
    : {}),
  },
}
