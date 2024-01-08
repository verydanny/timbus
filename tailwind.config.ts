import { join } from 'node:path'
import { type Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { timbusTheme } from './src/custom-theme'

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    // 4. Append the Skeleton plugin (after other plugins)
    skeleton({ themes: { custom: [timbusTheme] } }),
  ],
} satisfies Config
