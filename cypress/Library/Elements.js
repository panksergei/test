
export class Elements {

    static get timeout() { return 7000 }

    static get = {

        byTag: (tag) => {

            return cy.get(tag, { timeout: this.timeout })
                .should('not.be.undefined')

        },

        byText: (tag, text) => {

            if (typeof tag !== "undefined") {

                if (typeof text !== "undefined") {

                    return cy.contains(tag, text, { timeout: this.timeout })
                        .should('not.be.undefined')
                }
                else {

                    return cy.contains(tag, { timeout: this.timeout })
                        .should('not.be.undefined')
                }
            }
        },

        fromPatent: {

            byTag: (parent, tag) => {

                return this.get.byTag(parent)
                    .find(tag, { timeout: this.timeout })
                    .should('not.be.undefined')

            },

            byText: (parent, tag, text) => {

                if (typeof tag !== "undefined") {

                    if (typeof text !== "undefined") {

                        return this.get.byTag(parent)
                            .contains(tag, text, { timeout: this.timeout })
                            .should('not.be.undefined')
                    }
                    else {

                        return this.get.byTag(parent)
                            .contains(tag, { timeout: this.timeout })
                            .should('not.be.undefined')
                    }
                }
            },

        },

    }

    static loading = {

        tag: "[alt='loading']",

        get: () => { return Elements.get.byTag(this.loading.tag) },

        test: {

            isShown: (bool = true) => {

                cy.wait(500)

                if (bool) {

                    return this.loading.get()
                        .should('exist')
                }

                else {

                    return this.loading.get()
                        .should('not.exist')
                }
            }

        },
    }

    static slot = {

        tag: 'figure',
        url: 'slots/',

        names: {
            bookOfDead: 'Book of Dead',
        },

        get: {

            byName: (figName) => { return Elements.get.byText(this.slot.tag, figName) }


        },

        buttons: {

            play: {

                label: 'Play',
                tag: 'button',
                get(slot) { return Elements.get.fromPatent.byText(slot, this.tag, this.label) },

            },

        },


        bookOfDead: {

            name: 'Book of Dead',
            url: 'book-of-dead',
        }

    }

    static dropdown = {

        
    }

}
