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

    test('throws an error for invalid input', () => {
        expect(() => stringCalculator('1,\n')).toThrowError('Invalid input');
        expect(() => stringCalculator('1,\n3')).toThrowError('Invalid input');
    });

    test('returns the sum of numbers with custom delimiter', () => {
        expect(stringCalculator('//;\n1;2')).toBe(3);
        expect(stringCalculator('//:\n1:2:3')).toBe(6);
        expect(stringCalculator('//|\n1|2|3')).toBe(6);
    });

    test('throws an error for negative numbers', () => {
        expect(() => stringCalculator('1,-2')).toThrowError('negative numbers not allowed -2');
        expect(() => stringCalculator('1,-2,-3')).toThrowError('negative numbers not allowed -2,-3');
        expect(() => stringCalculator('1,-2\n-3')).toThrowError('negative numbers not allowed -2,-3');
        expect(() => stringCalculator('//|\n1|-2|3')).toThrowError('negative numbers not allowed -2');
    });

    test('ignores numbers greater than 1000', () => {
        expect(stringCalculator('1,1001')).toBe(1);
        expect(stringCalculator('1001,1001')).toBe(0);
        expect(stringCalculator('1001,1001\n1001')).toBe(0);
        expect(stringCalculator('//|\n1|1001|3')).toBe(4);
    });