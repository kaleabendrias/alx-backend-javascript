const calculateNumber = require('./1-calcul')
const assert = require('assert')

describe('calculate', () => {
    describe("SUM", () => {
        it('should add two positive numbers correctly', () => {
            assert.equal(calculateNumber("SUM", 3, 5), 8)
        })
        it('test it with floating first var', () => {
            assert.strictEqual(calculateNumber("SUM", 1.0, 3), 4);
            assert.strictEqual(calculateNumber("SUM", 1.2, 3), 4);
            assert.strictEqual(calculateNumber("SUM", 1.7, 3), 5);
        })
        it('test it with floating second var', () => {
            assert.strictEqual(calculateNumber("SUM", 1, 2.0), 3)
            assert.strictEqual(calculateNumber("SUM", 1, 2.6), 4)
            assert.strictEqual(calculateNumber("SUM", 1, 2.2), 3)
        })
        it('test it with floating second var', () => {
            assert.strictEqual(calculateNumber("SUM", 1.9, 2.0), 4)
            assert.strictEqual(calculateNumber("SUM", 1.9, 2.6), 5)
            assert.strictEqual(calculateNumber("SUM", 1.2, 2.6), 4)
        })
        it('test it with neagive floating var', () => {
            assert.strictEqual(calculateNumber("SUM", -2.0, 1.9), 0)
            assert.strictEqual(calculateNumber("SUM", 2.6, -1.9), 1)
            assert.strictEqual(calculateNumber("SUM", -2.6, -1.2), -4)
        })
    })
    describe("sub", () => {
        it('should add two positive numbers correctly', () => {
            assert.equal(calculateNumber("SUBTRACT", 5, 3), 2)
        })
        it('test it with floating first var', () => {
            assert.strictEqual(calculateNumber("SUBTRACT", 3, 1.0), 2);
            assert.strictEqual(calculateNumber("SUBTRACT", 3, 1.2), 2);
            assert.strictEqual(calculateNumber("SUBTRACT", 3, 1.7), 1);
        })
        it('test it with floating second var', () => {
            assert.strictEqual(calculateNumber("SUBTRACT", 2.0, 1), 1)
            assert.strictEqual(calculateNumber("SUBTRACT", 2.6, 1), 2)
            assert.strictEqual(calculateNumber("SUBTRACT", 2.2, 1), 1)
        })
        it('test it with floating second var', () => {
            assert.strictEqual(calculateNumber("SUBTRACT", 2.0, 1.9), 0)
            assert.strictEqual(calculateNumber("SUBTRACT", 2.6, 1.9), 1)
            assert.strictEqual(calculateNumber("SUBTRACT", 2.6, 1.2), 2)
        })
        it('test it with neagive floating var', () => {
            assert.strictEqual(calculateNumber("SUBTRACT", -2.0, 1.9), -4)
            assert.strictEqual(calculateNumber("SUBTRACT", 2.6, -1.9), 5)
            assert.strictEqual(calculateNumber("SUBTRACT", -2.6, -1.2), -2)
        })
    })
    describe('DIVIDE', () => {
        it("postive full numbers", () => {
            assert.equal(calculateNumber("DIVIDE", 8.0, 2.0), 4)
        })
        it("negative full numbers", () => {
            assert.equal(calculateNumber("DIVIDE", -8.0, 2.0), -4)
            assert.equal(calculateNumber("DIVIDE", -8.0, -2.0), 4)
            assert.equal(calculateNumber("DIVIDE", 8.0, -2.0), -4)
            assert.equal(calculateNumber("DIVIDE", 9.0, -2.0), -4.5)
        })
        it("dividing by negative num full numbers", () => {
            assert.equal(calculateNumber("DIVIDE", -8.0, 0), "Error")
            assert.equal(calculateNumber("DIVIDE", 8.0, 0), "Error")
        })
    })
})