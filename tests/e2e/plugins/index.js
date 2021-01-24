// https://on.cypress.io/plugins-guide

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
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
    supportFile: 'tests/e2e/support/index.js',
  }
}
