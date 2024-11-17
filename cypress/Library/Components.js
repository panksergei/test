import { Elements } from "./Elements"
import { Functions } from "./Functions"

export class Components{

    static categorySearchBar = {

        searchField: {
    
            tag: Functions.getDataCyTag('filter_search'),
    
            get() { return Elements.get.byTag(this.tag) }
    
        }
    
    }

    static languageSwitching = {

        tag: Functions.getDataCyTag('navDropdown-language'),

        get() { return Elements.get.byTag(this.tag) },

        optionList: {

            en: 'EN',
            fi: 'FI',
            ee: 'EE',
            ru: 'RU'

        }
    }

    static mainMenu = {}

    static gameIFrame = {

        tag: 'iframe[id="ax-game-iframe"]',

        get() { return Elements.get.byTag(this.tag) }

    }
}