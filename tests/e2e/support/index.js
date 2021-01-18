// https://on.cypress.io/configuration

import { configure } from '@testing-library/cypress'

import './commands'

configure({ testIdAttribute: 'data-test-id' })

beforeEach(() => {
  // Used in the frontend to disable features that only fail in Cypress tests
  window.localStorage.setItem('cypress', true)
})
