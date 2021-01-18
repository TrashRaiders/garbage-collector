// https://on.cypress.io/configuration

import './commands'

beforeEach(() => {
  // Used in the frontend to disable features that only fail in Cypress tests
  window.localStorage.setItem('cypress', true)
})
