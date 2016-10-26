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

function numToWords(num) {
    if (typeof num !== 'number') { return NaN; };
    if (num === 0) { return 'Zero'; }
    let returnString = ''
    const lookups = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninty',
    };
    let base = num;
    const quadrillions_count = Math.floor(base / 1000000000000000); 
    const quadrillions = quadrillions_count * 1000000000000000; 
    // console.log('quadrillions_count', quadrillions_count);
    if (quadrillions_count > 0) {
      returnString += numToWords(quadrillions_count) + 'Quadrillion';
    }
    base -= quadrillions;

    const trillions_count = Math.floor(base / 1000000000000); 
    const trillions = trillions_count * 1000000000000; 
    // console.log('trillions_count', trillions_count);
    if (trillions_count > 0) {
      returnString += numToWords(trillions_count) + 'Trillion';
    }
    base -= trillions;
    
    const billions_count = Math.floor(base / 1000000000); 
    const billions = billions_count * 1000000000; 
    // console.log('billions_count', billions_count);
    if (billions_count > 0) {
      returnString += numToWords(billions_count) + 'Billion';
    }
    base -= billions;

    const millions_count = Math.floor(base / 1000000);
    const millions = millions_count * 1000000;
    // console.log('millions_count', millions_count);
    if (millions_count > 0) {
      returnString += numToWords(millions_count) + 'Million';
    }
    base -= millions;

    const thousands_count = Math.floor(base / 1000);
    const thousands = thousands_count * 1000;
    // console.log('thousands_count', thousands_count);
    if (thousands_count > 0) {
      returnString += numToWords(thousands_count) + 'Thousand';
    }
    base -= thousands;

    const hundreds_count = Math.floor(base / 100);
    const hundreds = hundreds_count * 100;
    // console.log('hundreds_count', hundreds_count);
    if (hundreds_count > 0) {
      returnString += numToWords(hundreds_count) + 'Hundred';
    }
    base -= hundreds;

    const tens_count = Math.floor(base / 10);
    const tens = tens_count * 10;
    // console.log('tens_count', tens_count);
    if (tens_count > 1) {
      returnString += lookups[tens];
    }
    base -= tens;

    const ones_count = Math.floor(base / 1);
    const ones = ones_count * 1;
    // console.log('ones_count', ones_count);
    if (ones_count > 0) {
      if (tens_count === 1) {
        returnString += lookups[tens + ones];
      } else {
        returnString += lookups[ones];
      }      
    }
    base -= ones;
    
    return returnString;

}

// console.log(numToWords(0) === 'Zero'); // -> 'Zero'
// console.log(numToWords(43) === 'FortyThree'); // -> 'FortyThree'
// console.log(numToWords(2999) === 'TwoThousandNineHundredNintyNine') // -> 'TwoThousandNineHundredNintyNine'
// console.log(numToWords(15) === 'Fifteen'); // -> 'Fifteen'
// // console.log(numToWords(2483579411)) // -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
// console.log(numToWords(2483579411) === 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven') // -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
// console.log(numToWords(300525151340440) === 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'); // -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
// console.log(numToWords(92120000000000000) === 'NintyTwoQuadrillionOneHundredTwentyTrillion') // -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'

module.exports = numToWords;
