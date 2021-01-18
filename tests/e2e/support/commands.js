// https://on.cypress.io/custom-commands

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import '@testing-library/cypress/add-commands'

addMatchImageSnapshotCommand({
  failureThreshold: 0.1,
  failureThresholdType: 'percent',
})
