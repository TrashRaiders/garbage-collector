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
}
