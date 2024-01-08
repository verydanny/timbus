import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  // build: {
  //   target: 'esnext',
  //   modulePreload: {
  //     polyfill: false,
  //   },
  //   cssCodeSplit: true,
  // },
  // esbuild: {
  //   legalComments: 'external',
  // },
})
