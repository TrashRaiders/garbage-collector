// https://on.cypress.io/custom-commands

import '@testing-library/cypress/add-commands'
import './commands/login'

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
  failureThreshold: 0.1,
  failureThresholdType: 'percent',
})
