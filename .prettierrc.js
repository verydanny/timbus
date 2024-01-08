export default {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  experimentalTernaries: true,
  printWidth: 80,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  svelteBracketNewLine: false,
  htmlWhitespaceSensitivity: 'ignore',
  svelteStrictMode: true,
}
