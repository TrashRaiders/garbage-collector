module.exports = {
  root: true,
  extends: ['@twihike'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: ['./tsconfig.json', './tests/e2e/tsconfig.json'],
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'unicorn/no-array-for-each': 'off',
  },
}
