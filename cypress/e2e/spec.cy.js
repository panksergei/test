const { CybotCookiebotDialog } = require("../Dialogs/CybotCookiebotDialog")

describe('template spec', () => {

  it('open site', () => {
    cy.visit(Cypress.config('baseUrl'))
  })

  it('should deny cookies', () => {

    CybotCookiebotDialog.get()
      .should('exist')

    CybotCookiebotDialog.buttons.deny.get()
      .click()

  })

  

})