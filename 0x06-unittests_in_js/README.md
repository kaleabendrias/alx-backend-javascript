# Unit Testing in JavaScript

This repository contains multiple tasks related to unit testing in JavaScript using Mocha, Node.js's built-in `assert` library, Chai assertion library, and Sinon for spies and stubs. Each task is designed to enhance your understanding and proficiency in writing unit tests for JavaScript code.

## Task List

### Task 0: Basic test with Mocha and Node assertion library
- Set up Mocha for testing
- Implement a function `calculateNumber` in `0-calcul.js` that rounds two numbers and returns their sum
- Write test cases in `0-calcul.test.js` using Node's `assert` library
- Ensure every test passes using `npm test 0-calcul.test.js`

### Task 1: Combining descriptions
- Extend the `calculateNumber` function to handle different operations (SUM, SUBTRACT, DIVIDE)
- Write test cases for the updated function in `1-calcul.test.js` using Node's `assert` library
- Organize tests using `describe` blocks
- Ensure every test passes using `npm test 1-calcul.test.js`

### Task 2: Basic test using Chai assertion library
- Copy the code from Task 1 to `2-calcul_chai.js` and `2-calcul_chai.test.js`
- Rewrite test cases using Chai's `expect` syntax for more readable tests
- Ensure every test passes using `npm test 2-calcul_chai.test.js`

### Task 3: Spies
- Install Sinon for creating spies
- Create a Utils module with a `calculateNumber` function
- Implement `sendPaymentRequestToApi` function in `3-payment.js` that calls `calculateNumber` and logs the result
- Write test cases in `3-payment.test.js` to validate the behavior using spies
- Use `sinon.spy` to verify the usage of `calculateNumber`
- Ensure every test passes using `npm test 3-payment.test.js`

### Task 4: Stubs
- Copy the code from Task 3 to `4-payment.js` and `4-payment.test.js`
- Stub the `calculateNumber` function to always return a specific value
- Verify that the stub is called with the correct arguments
- Use spies to validate console.log outputs
- Ensure every test passes using `npm test 4-payment.test.js`

### Task 5: Hooks
- Copy the code from Task 4 to `5-payment.js` and `5-payment.test.js`
- Use `beforeEach` and `afterEach` hooks to set up and clean up spies
- Write tests to verify console.log outputs with different inputs
- Ensure every test passes using `npm test 5-payment.test.js`

### Task 6: Async tests with done
- Implement an asynchronous function `getPaymentTokenFromAPI` in `6-payment_token.js`
- Write test cases in `6-payment_token.test.js` to test the function's behavior with different inputs
- Use the `done` callback to handle asynchronous testing
- Ensure every test passes using `npm test 6-payment_token.test.js`

### Task 7: Skip
- Use the `skip` function to temporarily skip failing tests in `7-skip.test.js`
- Ensure that all other tests still pass without any warning
- Ensure every test passes using `npm test 7-skip.test.js`

### Task 8: Basic Integration testing
- Create an Express server in `8-api/api.js` with a route for the index page
- Write integration tests in `8-api/api.test.js` to verify the behavior of the server's routes
- Use the `request` module to send HTTP requests and validate responses
- Ensure every test passes using `npm test 8-api/api.test.js`

### Task 9: Regex integration testing
- Add a new route for a cart page in `9-api/api.js` that validates the ID parameter using regex
- Write integration tests in `9-api/api.test.js` to verify the behavior of the new route with valid and invalid IDs
- Use regex patterns to validate route parameters
- Ensure every test passes using `npm test 9-api/api.test.js`

### Task 10: Deep equality & Post integration testing
- Extend the API with new endpoints for retrieving available payments and user login
- Write integration tests in `10-api/api.test.js` to verify the behavior of the new endpoints
- Use deep equality to compare objects returned by the API
- Ensure every test passes using `npm test 10-api/api.test.js`

## How to Use
1. Clone this repository to your local machine.
2. Navigate to the respective task directory.
3. Follow the instructions in each task's README to complete the task.
4. Run `npm test` in the task directory to execute the test suite.

## Author
This project is authored by Kaleab Endrias.