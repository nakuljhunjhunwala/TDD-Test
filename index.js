function stringCalculator(str){
try {
    if (str === "") {
        return 0
    }

    if (str.length === 1) {
        return parseInt(str)
    }

    let negativeNumbers = str.match(/-\d/g)
    if (negativeNumbers) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join()}`)
    }

    let customDelimiter = str.match(/\/\/(.)\n/);

    let numbers = []
    if (customDelimiter) {
        numbers = str.split(customDelimiter[0])[1].split(customDelimiter[1])
    } else {
        numbers = str.split(/,|\n/)
    }
    numbers = numbers.filter(number => number <= 1000)
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        const number = parseInt(numbers[i])
        if (isNaN(number)) {
            console.log(numbers);
            throw new Error("Invalid input")
        }
        sum += number;
    }
    return sum
} catch (error) {
   throw new Error(error.message || "Invalid input")
}
}

module.exports = { stringCalculator };