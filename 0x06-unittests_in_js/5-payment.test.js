const sendPaymentRequestToAPI  = require('./5-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToAPI function', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and be called once for inputs 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and be called once for inputs 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
