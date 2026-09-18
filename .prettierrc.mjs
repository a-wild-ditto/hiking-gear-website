export default {
  plugins: ['prettier-plugin-astro'],
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
