/* eslint-disable no-template-curly-in-string */
// For Jest
module.exports = function config(api) {
  api.cache(false)

  const presets = [['next/babel']]

  return {
    presets,
    plugins: [
      [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/core',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'core',
      ],
      [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/icons',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'icons',
      ],
    ],
  }
}
/* eslint-enable no-template-curly-in-string */
