// https://on.cypress.io/configuration

import '@cypress/code-coverage/support'
import './commands'

import { configure } from '@testing-library/cypress'

configure({ testIdAttribute: 'data-test-id' })

beforeEach(() => {
  // Used in the frontend to disable features that only fail in Cypress tests
  window.localStorage.setItem('cypress', 'true')

  cy.setCookie('theme', 'dark')

  // replace all requests to placeimg.com with our static cat
  cy.intercept({ url: 'placeimg.com' }, { fixture: 'images/animal.png' })
})
