/* eslint-disable @typescript-eslint/no-var-requires */
// ***********************************************************
/// <reference types="cypress" />
/// <reference types="@types/node" />

// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - no @types/@cypress_browserify-preprocessor
const browserify = require('@cypress/browserify-preprocessor')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

/**
 * @type {Cypress.PluginConfig}
 * 
 * on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const options = browserify.defaultOptions
  options.browserifyOptions.transform[1][1].babelrc = true
  options.typescript = require.resolve('typescript')

  // collect coverage data in each test
  // eslint-disable-next-line global-require
  require('@cypress/code-coverage/task')(on, config)
  on('file:preprocessor', browserify(options))

  // enables taking snapshots during tests
  addMatchImageSnapshotPlugin(on, config)

  // modify browser launch arguments
  // https://on.cypress.io/browser-launch-api
  on('before:browser:launch', (browser, launchOptions) => {
    const width = 1280
    const height = 900

    // Note: forcing dark mode/theme on windows doesn't work ;(

    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push(
        '--force-dark-mode=true',
        `--window-size=${width},${height}`,
        '--force-device-scale-factor=1',
      )
    }

    if (browser.name === 'electron') {
      /* eslint-disable no-param-reassign */
      launchOptions.preferences.darkTheme = true

      if (browser.isHeadless) {
        launchOptions.preferences.width = width
        launchOptions.preferences.height = height
      }
      /* eslint-enable no-param-reassign */
    }

    return launchOptions
  })

  return {
    ...config,
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
  }
}
/* eslint-enable @typescript-eslint/no-var-requires */
