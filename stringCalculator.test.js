const util = require("./index.js")

const stringCalculator = util.stringCalculator

test('returns 0 for an empty string', () => {
  expect(stringCalculator('')).toBe(0);
});

test('returns the number for a single number input', () => {
    expect(stringCalculator('1')).toBe(1);
    expect(stringCalculator('2')).toBe(2);
  });

  test('returns the sum of two comma-delimited numbers', () => {
    expect(stringCalculator('1,2')).toBe(3);
    expect(stringCalculator('2,3')).toBe(5);
  });

  test('returns the sum of two newline-delimited numbers', () => {
    expect(stringCalculator('1\n2')).toBe(3);
    expect(stringCalculator('2\n3')).toBe(5);
  });

  test('returns the sum of three or more numbers', () => {
    expect(stringCalculator('1,2,3')).toBe(6);
    expect(stringCalculator('1\n2,3')).toBe(6);
    expect(stringCalculator('1\n2\n3')).toBe(6);
  });
