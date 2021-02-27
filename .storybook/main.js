const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'))
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['next/babel']],
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
