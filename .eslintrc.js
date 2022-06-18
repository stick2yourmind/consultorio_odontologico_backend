module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'sort-keys-fix'
  ],
  rules: {
    'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: true }],
    'sort-keys-fix/sort-keys-fix': 'warn'
  }
}
