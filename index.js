function stringCalculator(str){
    if (str === "") {
        return 0
    }

    if (str.length === 1) {
        return parseInt(str)
    }

    let numbers = str.split(/,|\n/)
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i])
    }
    return sum
}

module.exports = { stringCalculator };