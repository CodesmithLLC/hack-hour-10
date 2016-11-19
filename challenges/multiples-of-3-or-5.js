'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

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


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
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

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
