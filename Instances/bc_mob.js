const cypress = require('cypress')

const urls = {

    boostcasino_url: 'https://www.boostcasino.com/',
}

// node Instances/bc_mob
cypress.open({

    config: {

        baseUrl: urls.boostcasino_url,
        viewportHeight: 896,
        viewportWidth: 414,
    },

    env: {

    },
})