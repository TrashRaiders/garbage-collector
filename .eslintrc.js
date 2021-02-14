module.exports = {
  root: true,
  extends: ['@twihike'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', './src'],
      },
    },
  },
  parserOptions: {
    project: ['./tsconfig.json', './tests/e2e/tsconfig.json'],
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'unicorn/no-array-for-each': 'off',
    'no-restricted-syntax': 'off',
  },
  overrides: [
    {
      files: ['src/pages/**/*.*'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
}
