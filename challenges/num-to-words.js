// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */


let dictionaryZeros = { 1000000000000000: 'Quadrillion',
                           1000000000000: 'Trillion',
                              1000000000: 'Billion',
                                 1000000: 'Million',
                                    1000: 'Thousand'};
let dictionaryNums = { 1: 'One', 2: 'two'}
          // quadrillion       trillion      billion     million  thousand
let keys = [1000000000000000, 1000000000000, 1000000000, 1000000, 1000]
function numToWords(num) {

}

module.exports = numToWords;
