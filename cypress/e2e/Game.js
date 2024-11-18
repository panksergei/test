const { Components } = require("../Library/Components")
const { Dialogs } = require("../Library/Dialogs")
const { Elements } = require("../Library/Elements")

describe('Open site', () => {

  it('visit', () => {

    cy.visit(Cypress.config('baseUrl'))

    Elements.loading.test.isShown(false)

  })

  it('verify Search field is present', () => {

    Components.categorySearchBar.searchField.get()
      .should('exist')

  })

  it('should allow all cookies if dialog exists', () => {

    Dialogs.cookieDialog.action.acceptAllCookies()

  })

})

describe('Open game and verify it is loaded', () => {

  it('click on Book of Dead', () => {

    Elements.slot.get.byName(Elements.slot.bookOfDead.name)
      .should('exist')
      .trigger('mouseover')
      .then(slot => {

        Elements.slot.buttons.play.get(slot)
          .should('exist')
          .click()

      })

  })

  it('verify url contains game\'s name', () => {

    cy.url()
      .should('eq', Cypress.config('baseUrl') + Elements.slot.url + Elements.slot.bookOfDead.url)

  })

  it('verify game\'s iFrame is loaded', () => {

    Components.gameIFrame.get()
      .should('exist')

  })



})