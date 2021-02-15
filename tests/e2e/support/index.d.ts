/// <reference types="cypress" />

import type { Provider } from './commands/login'

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to login with social login providers.
       * @example cy.login('google')
       */
      login: (provider: Provider) => Chainable<void>
      /**
       * Custom command to logout the user.
       * @example cy.logout()
       */
      logout: () => Chainable<void>
    }
  }
}
