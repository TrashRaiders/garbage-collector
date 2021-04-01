const path = require('path')

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-apollo-client'],
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
