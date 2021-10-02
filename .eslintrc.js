const fs = require('fs')

const sourceFolders = fs
  .readdirSync('src', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

module.exports = {
  root: true,
  env: {
    amd: true,
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'unicorn',
    'promise',
    'simple-import-sort',
    'cypress',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', './src'],
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  rules: {
    // eslint
    'prefer-const': 'off',

    // prettier
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    // react
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',

    // import
    'import/no-cycle': ['off', { ignoreExternal: true }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    // simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports
          [`^(${sourceFolders.join('|')})(/.*|$)`],
          // Relative imports
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // ----------
    // typescript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // ----------

    // a11y
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    // unicorn
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          props: {
            properties: false,
          },
        },
        allowList: {
          ref: true,
          i18n: true,
          'next-env.d': true,
          getServerSideProps: true,
        },
      },
    ],
    // we need to return null for JSX elements: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/964
    'unicorn/no-null': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
      },
    ],
    'unicorn/no-array-for-each': 'off',
  },
  overrides: [
    {
      files: ['src/components/**'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              pascalCase: true,
            },
            ignore: ['.*stories.tsx'],
          },
        ],
      },
    },
    {
      files: ['src/pages/**'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              kebabCase: true,
            },
            ignore: ['^__coverage__.ts$'],
          },
        ],
      },
    },
    {
      files: [
        '*.config.js',
        'i18n.js',
        'scripts/**',
        '**/.eslintrc.js',
        'src/lib/apollo.ts',
        'src/lib/next-with-apollo.ts',
        'src/pages/api/__coverage__.ts',
        'tests/e2e/plugins/index.ts',
      ],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
}
