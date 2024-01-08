import { sveltekit } from '@sveltejs/kit/vite'
// import { purgeCss } from 'vite-plugin-tailwind-purgecss'
import purgeCss from '@mojojoejo/vite-plugin-purgecss'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    sveltekit(),
    ...(process.env.NODE_ENV === 'production' ?
      [purgeCss({ variables: true })]
    : []),
  ],
  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
    cssCodeSplit: true,
  },
  esbuild: {
    legalComments: 'external',
  },
})
