/**
 * Calculates the sum of numbers in a string.
 *
 * @param {string} str - The input string containing numbers.
 * @returns {number} The sum of the numbers in the string.
 * @throws {Error} If the input is invalid or contains negative numbers.
 */
function stringCalculator(str) {
    try {
        if (str === "") {
            return 0;
        }

        if (str.length === 1) {
            return parseInt(str);
        }

        checkForNegativeNumbers(str);

        const numbers = extractNumbers(str);
        const filteredNumbers = filterNumbers(numbers);

        return calculateSum(filteredNumbers);
    } catch (error) {
        throw new Error(error.message || "Invalid input");
    }
}

/**
 * Checks if a string contains negative numbers.
 * @param {string} str - The input string to check.
 * @throws {Error} Throws an error if negative numbers are found.
 */
function checkForNegativeNumbers(str) {
    const negativeNumbers = str.match(/-\d+/g);
    if (negativeNumbers) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join()}`);
    }
}

/**
 * Extracts numbers from a string.
 * @param {string} str - The input string.
 * @returns {number[]} - An array of numbers extracted from the string.
 */
function extractNumbers(str) {
    const customDelimiter = str.match(/\/\/(.)\n/);
    if (customDelimiter) {
        return str.split(customDelimiter[0])[1].split(customDelimiter[1]);
    } else {
        return str.split(/,|\n/);
    }
}

/**
 * Filters an array of numbers and returns only the numbers that are less than or equal to 1000.
 *
 * @param {number[]} numbers - The array of numbers to filter.
 * @returns {number[]} - The filtered array of numbers.
 */
function filterNumbers(numbers) {
    return numbers.filter(number => parseInt(number) <= 1000);
}

/**
 * Calculates the sum of an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers to calculate the sum.
 * @returns {number} The sum of the numbers.
 * @throws {Error} If the input contains an invalid number.
 */
function calculateSum(numbers) {
    return numbers.reduce((sum, number) => {
        const parsedNumber = parseInt(number);
        if (isNaN(parsedNumber)) {
            throw new Error("Invalid input");
        }
        return sum + parsedNumber;
    }, 0);
}

module.exports = { stringCalculator };
