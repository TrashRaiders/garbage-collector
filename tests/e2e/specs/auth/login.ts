// type definitions for custom commands like "login"
/// <reference types="../../support" />

import { viewports } from '../../support/constants'

describe('login', (): void => {
  beforeEach(() => {
    // cy.logout()
  })

  viewports.forEach((viewport): void => {
    it(`viewport:${viewport}`, () => {
      cy.viewport(viewport)
      cy.visit('/')

      // login menu
      cy.findByTestId('account-icon').click()
      cy.matchImageSnapshot(`vp-${viewport}-1-auth-menu`)
      cy.get('a[href="/signin"]:visible')

      // login

      /* Does not work in CI - tried on 2021.02.16
      cy.login('github')

      cy.reload()
      cy.findByTestId('account-icon').click()

      cy.matchImageSnapshot(`vp-${viewport}-2-after-login`)
      */
    })
  })
})
