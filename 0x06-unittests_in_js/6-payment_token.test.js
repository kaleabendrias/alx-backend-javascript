const getPaymentTokenFromAPI  = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI function', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      
  });
})
