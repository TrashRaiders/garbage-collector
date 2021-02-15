import { cy, describe, it } from 'local-cypress'

import { viewports } from '../../support/constants'

describe('login', (): void => {
  beforeEach(() => {
    cy.logout()
  })

  viewports.forEach((viewport): void => {
    it(`viewport:${viewport}`, () => {
      cy.viewport(viewport)
      cy.visit('/')

      // login menu
      cy.findByTestId('account-icon').click()
      cy.matchImageSnapshot(`vp-${viewport}-1-auth-menu`)
      cy.get('a[href="/api/auth/signin"]:visible')

      // login
      cy.login('github')

      cy.reload()
      cy.findByTestId('account-icon').click()

      cy.matchImageSnapshot(`vp-${viewport}-2-after-login`)
    })
  })
})
