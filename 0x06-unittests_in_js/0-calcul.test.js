const assert = require('assert');
const calculateNumber = require('./0-calculate');

describe('calculate', () => {
    describe('addition', () => {
        it('should add two positive numbers correctly', () => {
            assert.equal(calculateNumber(3, 5), 8)
        })
    })
})