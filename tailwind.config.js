/** @type { import('tailwindcss').Config } */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        twitch: {
          purple: '#9146FF', // Twitch's primary purple color
          dark: '#0e0e10', // Twitch's dark color, often used for backgrounds
          light: '#f7f7f8', // Light color for text or elements on dark backgrounds
          gray: {
            100: '#e5e5e5', // Light gray, for borders or backgrounds
            200: '#c4c4c4', // Medium gray, for less emphasis
            300: '#a8a8a8', // Dark gray, for text or icons
          },
        },
      },
    },
  },
  plugins: [],
}
