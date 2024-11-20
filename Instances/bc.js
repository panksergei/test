const cypress = require('cypress')

const urls = {

    boostcasino_url: 'https://www.boostcasino.com/',
}

// node Instances/bc
cypress.open({

    config: {

        baseUrl: urls.boostcasino_url,
    },

    env: {

    },
})