//----------------------------------------------------------
// Test Tools
const chai = require('chai');

//----------------------------------------------------------
// Test Data
const test_data = [
  {
    input: [1, 4, 5, 100, 10],
    result: 290
  }
];

//----------------------------------------------------------
// Test
describe('Solution', function () {
  const solve = require('./solution');

  test_data.forEach((test, index) => {
    it(`TC#${index + 1}: should pass`, function () {
      chai.expect(solve(test.input)).equals(test.result);
    });
  });
});
