const { name } = require("commander")
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

    Dialogs.cookieDialog.get()
      .then(dialog => {

        if (dialog.length != 0) {

          Dialogs.cookieDialog.buttons.allowAll.get()
            .click()

          Dialogs.cookieDialog.get()
            .should('not.exist')

        }

      })

  })

})

describe('Open game and verify it is loaded', () => {

  it('click on Book of Dead', () => {

    const arr = {
      a1: '1',
      a2: '2',
      a3: {
        n: 'n',
        l: {
          a31: '31',
          a32: '32'
        }
      },
      a4: '4',
    }

    let sub = false

    const f = function (obj) {

      Object.entries(obj)
        .forEach((key, val) => {

          if (typeof val == "object") {

            if(obj[key].hasOwnProperty('name')){

              console.log(`'click' Main ${val} has Name`)

            }

            

            sub = !sub
            f(val)


          } else {

            if (sub) {

              console.log(`'click' ${val}`)

            } else {

              console.log(`'click' Main`)
              console.log(`'click' ${val}`)

            }


          }

        })

    }
    f(arr)
    // Object.values(arr)
    //   .forEach(val => {

    //     if (typeof val == "object") {

    //       Object.values(val)
    //         .forEach(val => {

    //           console.log('###', val)

    //         })

    //     } else {

    //       console.log('###', val)

    //     }

    //   })

    cy.get('svg')
      .first()
      .click()



    cy.pause()

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