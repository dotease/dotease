module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    jsx: true,
  },
  overrides: [
    {
      files: 'scripts/**/*.(ts|tsx)',
      plugins: ['@dotease/eslint-plugin'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@dotease/promote-semantic-elements-for-accessibility': 'warn',
      },
    },
  ],
};
