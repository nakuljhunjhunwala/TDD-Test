function stringCalculator(str){
    if (str === "") {
        return 0
    }

    if (str.length === 1) {
        return parseInt(str)
    }

    return 0
}

module.exports = { stringCalculator };