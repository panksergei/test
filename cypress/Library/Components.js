import { Elements } from "./Elements"
import { Functions } from "./Functions"

export class Components {

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

    static mainMenu = {

        menuItems: [
            ['Home'],

            ['Casino',
                //sub-menu
                ['Popular', 'New', 'Slots', 'Jackpots', 'Buy Feature', 'Hot Slots', 'Table Games', 'Drops & Wins',
                    'Cash Drop', 'Arcade', 'Cluster Games', 'Latest Provider', 'Exclusives'],
                //array with text on page and url to approve loaded page
                [
                    ['Popular Games', 'popular-games'],
                    ['New Games', 'new-games'],
                    ['Slots', 'slots'],
                    ['Jackpots', 'jackpot-games'],
                    ['Buy Feature Games', 'buy-feature'],
                    ['Hot Slots Games', 'hot-slots'],
                    ['Casino games', 'casino-games'],
                    ['Drops & Wins', 'drops-and-wins'],
                    ['Cash Drop Games', 'cash-drop'],
                    ['Arcade Games', 'arcade-games'],
                    ['Cluster Games', 'cluster-games'],
                    ['Latest Provider Games', 'latest-provider'],
                    ['Exclusives Games', 'exclusives']
                ]
            ],

            ['Live Casino',
                //sub-menu
                ['Popular', 'Game Shows', 'Roulette', 'Blackjack', 'Baccarat', 'Poker'],
                //array with text on page and url to approve loaded page
                [
                    ['Live Casino', 'live-casino'],
                    ['Game Shows', 'live-casino/game-shows'],
                    ['Roulette', 'live-casino/roulette'],
                    ['Blackjack', 'live-casino/blackjack'],
                    ['Baccarat', 'live-casino/baccarat'],
                    ['Poker', 'live-casino/poker']
                ]
            ],

            ['Promotions',
                //sub-menu
                ['Welcome Bonus', 'Boost XP', 'Casino Promotions', 'Live Casino Promotions', 'All Promotions'],
                //array with text on page and url to approve loaded page
                [
                    ['Welcome Bonus', 'bonus'],
                    ['Boost XP', 'boostxp'],
                    ['Casino Promotions', 'promotions/casino'],
                    ['Live Casino Promotions', 'promotions/live-casino'],
                    ['Promotions', 'promotions']
                ],
            ],

            ['Customer Support',
                //array with text on page and url to approve loaded page
                [
                    ['Boost Casino Support Center', 'customer-support']
                ]
            ]
        ],

        burgerIcon: {

            tag: '.burger',

            get() { return Elements.get.byTag(this.tag) }

        }
    }

    static pageTitle = {
        tag: 'h1',
        get() { return Elements.get.byTag(this.tag).first() }
    }

    static gameIFrame = {

        tag: 'iframe[id="ax-game-iframe"]',

        get() { return Elements.get.byTag(this.tag) }

    }
}