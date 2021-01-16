import { viewports } from '../../support/constants'

describe('login', (): void => {
  viewports.forEach((viewport): void => {
    it(`viewport:${viewport}`, () => {
      cy.viewport(viewport)
      cy.visit('/')

      // Login page
      cy.get('[data-test-id="account-icon"]').click()
      cy.matchImageSnapshot(`vp-${viewport}-1-auth-options`)
      cy.get('a[href="/login"]:visible').click()
      cy.contains('h1', 'Einloggen')

      // TODO find out how to listen to an animation end
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(300)

      cy.matchImageSnapshot(`vp-${viewport}-2-login`)

      // Login
      cy.get('input[name=name]').type('myusername')
      cy.get('input[name=password]').type('mypassword')
      cy.matchImageSnapshot(`vp-${viewport}-3-after-input`)
      cy.get('button[type=submit]').click()
      cy.contains('Müll Sammler')
      cy.matchImageSnapshot(`vp-${viewport}-4-after-submit`)
    })
  })
})
