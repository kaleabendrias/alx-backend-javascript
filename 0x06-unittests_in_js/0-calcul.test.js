const assert = require('assert');
const calculateNumber = require("./0-calcul")

describe('calculate', () => {
        it('should add two positive numbers correctly', () => {
            assert.equal(calculateNumber(3, 5), 8)
        })
})