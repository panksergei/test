const { name } = require("commander")
const { Components } = require("../Library/Components")
const { Dialogs } = require("../Library/Dialogs")
const { Elements } = require("../Library/Elements")

describe('Open site', () => {

  it('visit', () => {

    cy.visit(Cypress.config('baseUrl'))

    Elements.loading.test.isShown(false)

  })

  it('should allow all cookies if dialog exists', () => {

    Dialogs.cookieDialog.action.acceptAllCookies()

  })

})

describe('Verify Main menu', () => {

  const f = function (menu) {

    for (let i = 1; i < menu.length; i++) {

      if (menu[i].length == 2) {

        it(`'click' ${menu[i][0]}`, () => {

          //if menu is opened due to test before was failed then close menu
          Elements.get.byTag('[title ="Live chat button"]')
            .should('exist')
            .parent()
            .invoke('attr', 'hidden')
            .then(attr => {
              console.log('attr', attr)
              if (attr == 'hidden') {

                Components.mainMenu.burgerIcon.get()
                  .click()

              }
            })

          Components.mainMenu.burgerIcon.get()
            .click()

          Elements.get.byText('li', menu[i][0])
            .should('exist')
            .click()

        })

        it(`'should verivy page ${menu[i][0]} is loaded`, () => {

          Components.pageTitle.get()
            .should('exist')
            .as('title')

            cy.get('@title')
              .should('contain', menu[i][1][0][0])

          cy.url()
            .should('eq', Cypress.config('baseUrl') + menu[i][1][0][1])

        })


      } else {
        console.log('aaa', menu[i][1])
        menu[i][1]
          .forEach((el, ind) => {

            it(`'click' ${el}`, () => {

              //if menu is opened due to test before was failed then close menu
              Elements.get.byTag('[title ="Live chat button"]')
                .should('exist')
                .parent()
                .invoke('attr', 'hidden')
                .then(attr => {
                  console.log('attr', attr)
                  if (attr == 'hidden') {

                    Components.mainMenu.burgerIcon.get()
                      .click()

                  }
                })

              Components.mainMenu.burgerIcon.get()
                .click()

              //menu item click
              Elements.get.byText('li', menu[i][0])
                .should('exist')
                .click()

              //sub-menu click
              Elements.get.byText('li', el)
                .should('exist')
                .click()

            })

            it(`'should verivy page' ${menu[i][2][ind][0]} is loaded`, () => {

              Components.pageTitle.get()
                .should('exist')
                .as('title')

              cy.get('@title')
                .should('contain', menu[i][2][ind][0])

              cy.url()
                .should('eq', Cypress.config('baseUrl') + menu[i][2][ind][1])

            })
          })
      }

    }

  }

  f(Components.mainMenu.menuItems)

})