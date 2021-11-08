const { Temporal, Intl, toTemporalInstant } = require('@js-temporal/polyfill');
Date.prototype.toTemporalInstant = toTemporalInstant;

async function fatalityMonitor() {
    return Promise.race([
        new Promise((resolve) => setTimeout(resolve, 3000, 'not ok')),
        new Promise((resolve) => setTimeout(resolve, 2000, 'ok'))
    ])
}



async function run() {
    while (true) {
        await fatalityMonitor().then( (outcome) => {
            console.log(`outcome: ${outcome}`)
        })
    }
}

run()