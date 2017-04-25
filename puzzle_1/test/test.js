//----------------------------------------------------------
// Test Tools
const chai = require('chai');

//----------------------------------------------------------
// Test Data
const test_data = [
  {
    input: [1],
    result: 1
  },
  {
    input: [1, 1, 2],
    result: 2
  },
  {
    input: [0, 0, 1, 2, 1],
    result: 2
  },
  {
    input: [4, 9, 95, 93, 57, 4, 57, 93, 9],
    result: 95
  },
];

//----------------------------------------------------------
// Test
describe('Solution #1', function () {
  const solve = require('../solution/solution_1');

  test_data.forEach((test, index) => {
    it(`TC#${index}: should pass`, function () {
      const result = solve(test.input);
      chai.expect(result).equals(test.result);
    });
  });
});

describe('Solution #2', function () {
  const solve = require('../solution/solution_2');

  test_data.forEach((test, index) => {
    it(`TC#${index}: should pass`, function () {
      const result = solve(test.input);
      chai.expect(result).equals(test.result);
    });
  });
});
