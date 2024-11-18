import { Elements } from "./Elements"

export class Dialogs {

    static cookieDialog = {

        tag: "[id='CybotCookiebotDialog'",

        get() {

            return Elements.get.byTag(this.tag)

        },

        buttons: {

            deny: {

                tag: "[id='CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll'",

                get() { return Elements.get.byTag(this.tag) }

            },

            allowAll: {

                tag: "[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'",

                get() { return Elements.get.byTag(this.tag) }

            }
        },

        action: {

            acceptAllCookies() {

                Dialogs.cookieDialog.get()
                    .then(dialog => {

                        //click Allow All button if dialog exists and wait dialo disappears
                        if (dialog.length != 0) {

                            Dialogs.cookieDialog.buttons.allowAll.get()
                                .click()

                            Dialogs.cookieDialog.get()
                                .should('not.exist')

                        }

                    })

            }

        }


    }

}