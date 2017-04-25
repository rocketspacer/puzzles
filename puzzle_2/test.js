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
    result: 45
  },
  {
    input: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    result: 45
  }
];

//----------------------------------------------------------
// Test
describe('Solution #1', function () {
  const solve = require('./solution');

  test_data.forEach((test, index) => {
    it(`TC#${index}: should pass`, function () {
      chai.expect(solve(test.input)).equals(test.result);
    });
  });
});
