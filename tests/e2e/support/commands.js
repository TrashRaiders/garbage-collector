// https://on.cypress.io/custom-commands

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
  failureThreshold: 0.1,
  failureThresholdType: 'percent',
})
