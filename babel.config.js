/* eslint-disable no-template-curly-in-string */
// For Jest
module.exports = function config(api) {
  api.cache(true)

  const presets = [['next/babel']]

  return {
    presets,
    plugins: [
      [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/core',
          libraryDirectory: 'esm',
          camel2DashComponentName: false,
        },
        'core',
      ],
      [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/icons',
          libraryDirectory: 'esm',
          camel2DashComponentName: false,
        },
        'icons',
      ],
    ],
  }
}
/* eslint-enable no-template-curly-in-string */
