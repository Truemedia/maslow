const { Temporal, Intl, toTemporalInstant } = require('@js-temporal/polyfill');
Date.prototype.toTemporalInstant = toTemporalInstant;

const fatalityMonitor = async () => {
    return Promise.race([
        new Promise((resolve) => setTimeout(resolve, 5000, 'not ok')),
        new Promise((resolve) => setTimeout(resolve, 4000, 'ok'))
    ])
}

fatalityMonitor().then( (outcome) => {
    console.log(`outcome: ${outcome}`)
})