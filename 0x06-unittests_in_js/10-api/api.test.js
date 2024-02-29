const request = require("request");
const expect = require("chai").expect;

describe("Cart page", () => {
  it("should return status code 200", (done) => {
  request.get("http://localhost:7865/", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
  });
  });
  it("should return status code 200 when id is a number", (done) => {
    request.get("http://localhost:7865/cart/12", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });

  it("should return status code 404 when id is not a number", (done) => {
    request.get("http://localhost:7865/cart/hello", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it("should return the available payment methods", (done) => {
    request("http://localhost:7865/available_payments", (error, response, body) => {
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});

describe("Available Payments endpoint", () => {
  it("should return the available payment methods", (done) => {
    request("http://localhost:7865/available_payments", (error, response, body) => {
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});

describe("Login endpoint", () => {
  it("should return a welcome message with the username provided in the request body", (done) => {
    const username = "Kaleab";
    request.post({
      url: "http://localhost:7865/login",
      body: { userName: username },
      json: true
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Welcome ${username}`);
      done();
    });
  });
});
