const util = require("./index.js")

const stringCalculator = util.stringCalculator

test('returns 0 for an empty string', () => {
  expect(stringCalculator('')).toBe(0);
});

test('returns the number for a single number input', () => {
    expect(stringCalculator('1')).toBe(1);
    expect(stringCalculator('2')).toBe(2);
  });
