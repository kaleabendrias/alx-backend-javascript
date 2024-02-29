const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('calculateNumber function', function () {
  it('should return 10 when Utils.calculateNumber is stubbed', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);

    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);

    stub.restore();
    consoleSpy.restore();
  });
});