function sumMultiples3Or5Below1000() {
    let numberThatWillAccumulateToTheSumIWillReturn = 0;
    for (let multiplesOfThree = 3; multiplesOfThree < 1000; multiplesOfThree += 3) {
        numberThatWillAccumulateToTheSumIWillReturn += multiplesOfThree;
    }
    for (let multiplesOfFive = 5; multiplesOfFive < 1000; multiplesOfFive += 5) {
        numberThatWillAccumulateToTheSumIWillReturn += multiplesOfFive;
    }
    for (let duplicatesToEliminate = 3 * 5; duplicatesToEliminate < 1000; duplicatesToEliminate += 3 * 5) {
        numberThatWillAccumulateToTheSumIWillReturn -= duplicatesToEliminate;
    }
    return numberThatWillAccumulateToTheSumIWillReturn;
}

function sumMultiplesXOrYBelowZ(x, y, z) {
    let numberThatWillAccumulateToTheSumIWillReturn = 0;
    for (let firstVariableThatWillIncrement = x; firstVariableThatWillIncrement < z; firstVariableThatWillIncrement += x) {
        numberThatWillAccumulateToTheSumIWillReturn += firstVariableThatWillIncrement;
    }
    for (let secondVariableThatWillIncrement = y; secondVariableThatWillIncrement < z; secondVariableThatWillIncrement += y) {
        numberThatWillAccumulateToTheSumIWillReturn += secondVariableThatWillIncrement;
    }
    for (let duplicatesToEliminate = x * y; duplicatesToEliminate < 1000; duplicatesToEliminate += x * y) {
        numberThatWillAccumulateToTheSumIWillReturn -= duplicatesToEliminate;
    }
    return numberThatWillAccumulateToTheSumIWillReturn;
}

var objectToExport = {
    sumMultiples3Or5Below1000: sumMultiples3Or5Below1000,
    sumMultiplesXOrYBelowZ: sumMultiplesXOrYBelowZ
}

module.exports = objectToExport;