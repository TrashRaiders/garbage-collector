// https://docs.cypress.io/api/introduction/api.html

const viewports: Cypress.ViewportPreset[] = ['iphone-5', 'macbook-15']

describe('My First Test', (): void => {
  viewports.forEach((viewport): void => {
    it(`Auth viewport:${viewport}`, () => {
      // Top page
      cy.viewport(viewport)
      cy.visit('/')
      cy.contains('Müll Sammler')
      cy.matchImageSnapshot(`vp-${viewport}-1`)

      // Login page
      cy.get('[data-test-id="account-icon"]').click()
      cy.matchImageSnapshot(`vp-${viewport}-2`)
      cy.get('a[href="/login"]:visible').click()
      cy.contains('h1', 'Einloggen')
      cy.matchImageSnapshot(`vp-${viewport}-3`)

      // Log-in
      cy.get('input[name=name]').type('myusername')
      cy.get('input[name=password]').type('mypassword')
      cy.matchImageSnapshot(`vp-${viewport}-4`)
      cy.get('button[type=submit]').click()
      cy.contains('Müll Sammler')
      cy.matchImageSnapshot(`vp-${viewport}-5`)
    })
  })
})
