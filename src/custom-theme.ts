import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin'

export const timbusTheme: CustomThemeConfig = {
  name: 'timbus',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '4px',
    '--theme-rounded-container': '4px',
    '--theme-border-base': '2px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '255 255 255',
    '--on-success': '255 255 255',
    '--on-warning': '255 255 255',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #6441a5
    '--color-primary-50': '232 227 242', // #e8e3f2
    '--color-primary-100': '224 217 237', // #e0d9ed
    '--color-primary-200': '216 208 233', // #d8d0e9
    '--color-primary-300': '193 179 219', // #c1b3db
    '--color-primary-400': '147 122 192', // #937ac0
    '--color-primary-500': '100 65 165', // #6441a5
    '--color-primary-600': '90 59 149', // #5a3b95
    '--color-primary-700': '75 49 124', // #4b317c
    '--color-primary-800': '60 39 99', // #3c2763
    '--color-primary-900': '49 32 81', // #312051
    // secondary | #b9a3e3
    '--color-secondary-50': '245 241 251', // #f5f1fb
    '--color-secondary-100': '241 237 249', // #f1edf9
    '--color-secondary-200': '238 232 248', // #eee8f8
    '--color-secondary-300': '227 218 244', // #e3daf4
    '--color-secondary-400': '206 191 235', // #cebfeb
    '--color-secondary-500': '185 163 227', // #b9a3e3
    '--color-secondary-600': '167 147 204', // #a793cc
    '--color-secondary-700': '139 122 170', // #8b7aaa
    '--color-secondary-800': '111 98 136', // #6f6288
    '--color-secondary-900': '91 80 111', // #5b506f
    // tertiary | #262626
    '--color-tertiary-50': '222 222 222', // #dedede
    '--color-tertiary-100': '212 212 212', // #d4d4d4
    '--color-tertiary-200': '201 201 201', // #c9c9c9
    '--color-tertiary-300': '168 168 168', // #a8a8a8
    '--color-tertiary-400': '103 103 103', // #676767
    '--color-tertiary-500': '38 38 38', // #262626
    '--color-tertiary-600': '34 34 34', // #222222
    '--color-tertiary-700': '29 29 29', // #1d1d1d
    '--color-tertiary-800': '23 23 23', // #171717
    '--color-tertiary-900': '19 19 19', // #131313
    // success | #1c9504
    '--color-success-50': '221 239 217', // #ddefd9
    '--color-success-100': '210 234 205', // #d2eacd
    '--color-success-200': '198 229 192', // #c6e5c0
    '--color-success-300': '164 213 155', // #a4d59b
    '--color-success-400': '96 181 79', // #60b54f
    '--color-success-500': '28 149 4', // #1c9504
    '--color-success-600': '25 134 4', // #198604
    '--color-success-700': '21 112 3', // #157003
    '--color-success-800': '17 89 2', // #115902
    '--color-success-900': '14 73 2', // #0e4902
    // warning | #c44a08
    '--color-warning-50': '246 228 218', // #f6e4da
    '--color-warning-100': '243 219 206', // #f3dbce
    '--color-warning-200': '240 210 193', // #f0d2c1
    '--color-warning-300': '231 183 156', // #e7b79c
    '--color-warning-400': '214 128 82', // #d68052
    '--color-warning-500': '196 74 8', // #c44a08
    '--color-warning-600': '176 67 7', // #b04307
    '--color-warning-700': '147 56 6', // #933806
    '--color-warning-800': '118 44 5', // #762c05
    '--color-warning-900': '96 36 4', // #602404
    // error | #d9204f
    '--color-error-50': '249 222 229', // #f9dee5
    '--color-error-100': '247 210 220', // #f7d2dc
    '--color-error-200': '246 199 211', // #f6c7d3
    '--color-error-300': '240 166 185', // #f0a6b9
    '--color-error-400': '228 99 132', // #e46384
    '--color-error-500': '217 32 79', // #d9204f
    '--color-error-600': '195 29 71', // #c31d47
    '--color-error-700': '163 24 59', // #a3183b
    '--color-error-800': '130 19 47', // #82132f
    '--color-error-900': '106 16 39', // #6a1027
    // surface | #262626
    '--color-surface-50': '222 222 222', // #dedede
    '--color-surface-100': '212 212 212', // #d4d4d4
    '--color-surface-200': '201 201 201', // #c9c9c9
    '--color-surface-300': '168 168 168', // #a8a8a8
    '--color-surface-400': '103 103 103', // #676767
    '--color-surface-500': '38 38 38', // #262626
    '--color-surface-600': '34 34 34', // #222222
    '--color-surface-700': '29 29 29', // #1d1d1d
    '--color-surface-800': '23 23 23', // #171717
    '--color-surface-900': '19 19 19', // #131313
  },
}
