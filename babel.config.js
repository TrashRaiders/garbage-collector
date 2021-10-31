/* eslint-disable no-template-curly-in-string */
// For Jest
module.exports = function config(api) {
  api.cache(false)

  const presets = [['next/babel']]

  return {
    presets,
    plugins: [
      'istanbul',
      [
        'babel-plugin-import',
        {
          libraryName: '@mui/material',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'core',
      ],
    ],
  }
}
/* eslint-enable no-template-curly-in-string */
