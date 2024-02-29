const request = require("request");
const expect = require("chai").expect;

describe("Index page", () => {
  it("should return status code 200", (done) => {
    request.get("http://localhost:7865/", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
