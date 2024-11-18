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

describe('Verify Language dropdown', () => {

    it('Language dropdown is present', () => {

        Components.languageSwitching.get()
            .should('exist')

    })

    it('verify "EN" is selected by default', () => {

        Components.languageSwitching.get()
            .should('contain', Components.languageSwitching.optionList.en)

    })

    it('verify page is in english', () => {

        Components.categorySearchBar.searchField.get()
            .find('input')
            .invoke('attr', 'placeholder')
            .should('contain', 'Search')

    })

})

describe('Select different languages', () => {

    const translTable = {
        fi: 'Etsi',
        ee: 'Otsi',
        ru: 'Поиск'
    }

    Object.keys(translTable)
        .forEach(val => {

            it('open dropdown', () => {

                Components.languageSwitching.get()
                    .click()

            })

            it(`select ${val} language`, () => {

                Components.languageSwitching.get()
                    .contains(Components.languageSwitching.optionList[val])
                    .click()

            })

            it(`Search field is translated to ${val}`, () => {

                Components.categorySearchBar.searchField.get()
                    .should('exist')
                    .find('input')
                    .invoke('attr', 'placeholder')
                    .should('contain', translTable[val])

            })

        })


})