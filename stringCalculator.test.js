const util = require("./index.js")

const stringCalculator = util.stringCalculator

test('returns 0 for an empty string', () => {
  expect(stringCalculator('')).toBe(0);
});

