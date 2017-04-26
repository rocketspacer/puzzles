//----------------------------------------------------------
// Test Tools
const chai = require('chai');

//----------------------------------------------------------
// Test Data
const test_data = [
  {
    input: [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7],
    result: 5
  },
  {
    input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    result: 55
  },
  {
    input: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    result: 55
  },
  {
    input: [3, -3, 0, 0, 0, 0],
    result: 15
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
