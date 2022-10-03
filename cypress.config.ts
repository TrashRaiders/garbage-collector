// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress'

import { setupNodeEvents } from './tests/e2e/node-events'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    chromeWebSecurity: false,
    env: {
      codeCoverage: {
        url: '/api/__coverage__',
      },
    },
    defaultCommandTimeout: 12_000,
    supportFile: 'tests/e2e/support/index.ts',
    specPattern: 'tests/e2e/**/*.cy.ts',
    setupNodeEvents,
  },
})
