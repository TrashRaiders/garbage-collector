/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="cypress" />

import type { Provider } from './commands/login'

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to login with social login providers.
       * @example cy.login('google')
       */
      login: (provider: Provider) => Chainable<any>
      /**
       * Custom command to logout the user.
       * @example cy.logout()
       */
      logout: () => Chainable<any>
    }
  }
}

/* eslint-enable @typescript-eslint/no-unused-vars */
/* eslint-enable @typescript-eslint/no-explicit-any */
