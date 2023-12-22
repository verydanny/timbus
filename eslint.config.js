import path from 'path'
import { fileURLToPath } from 'url'
import * as globals from 'globals'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended.js'
import tsParser from '@typescript-eslint/parser'
import svelteParser from 'svelte-eslint-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type { Array<import("eslint").Linter.FlatConfig> } */
export default [
  js.configs.recommended,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:svelte/recommended'),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.svelte'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        extraFileExtensions: ['.svelte'],
      },
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  eslintConfigPrettier,
  ...compat.extends('plugin:svelte/prettier'),
  {
    ignores: ['**/node_modules', '**/.vercel', '**/.svelte-kit'],
  },
]
