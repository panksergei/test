export const CybotCookiebotDialog = {

    tag: "[id='CybotCookiebotDialog'",

    get(){

        return cy.get(this.tag, {timeout: 7000})

    },

    buttons: {

        deny: {

            tag: "[id='CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll'",

            get(){return cy.get(this.tag)}

        }
    }

}