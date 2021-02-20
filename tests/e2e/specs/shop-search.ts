import { viewports } from '../support/constants'

describe('shop search', (): void => {
  viewports.forEach((viewport): void => {
    it(`Auth viewport:${viewport}`, () => {
      cy.viewport(viewport)
      cy.visit('/')

      cy.contains('Müll Sammler')
      cy.matchImageSnapshot(`vp-${viewport}-first-visit`)
    })
  })
})
