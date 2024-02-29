const getPaymentTokenFromAPI  = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI function', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should not resolve when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Promise should not be resolved'));
      })
      .catch((error) => {
        expect(error.message).to.equal('Promise should not be resolved');
        done();
      });
  });
});
