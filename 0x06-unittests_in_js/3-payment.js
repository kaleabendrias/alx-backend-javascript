const calculateNumber = require('./utils').calculateNumber

function sendPaymentRequestToApi (totalAmount, totalShipping) {
    const sum = calculateNumber("SUM", totalAmount, totalShipping)
    console.log(`The total is: ${sum}`)
}

module.exports = sendPaymentRequestToApi