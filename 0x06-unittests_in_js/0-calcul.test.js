const assert = require('assert');
const calculateNumber = require("./0-calcul");
const { callbackify } = require('util');

describe('calculate', () => {
        it('should add two positive numbers correctly', () => {
            assert.equal(calculateNumber(3, 5), 8)
        })
        it('test it with floating first var', () => {
            assert.strictEqual(calculateNumber(1.0, 3), 4);
            assert.strictEqual(calculateNumber(1.2, 3), 4);
        })
        it('test it with floating second var', () => {
            assert.strictEqual(calculateNumber(1, 2.0), 3)
            assert.strictEqual(calculateNumber(1, 2.6), 4)
        })
        it('test it with floating second var', () => {
            assert.strictEqual(calculateNumber(1.9, 2.0), 4)
            assert.strictEqual(calculateNumber(1.9, 2.6), 5)
        })
        it('test with .0', () => {
            assert.strictEqual(calculateNumber(1.0, 2.0), 3)
            assert.strictEqual(calculateNumber(1.0, 2.6), 4)
        })
})