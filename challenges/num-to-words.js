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
  let numString = JSON.stringify(num);
  let numStringRev = numString.split('').reverse().join('');
  let output = '';

  let store = {
    0: 'Zero',
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
    19: 'Nineteen'
  };

  let prefix = {
    2: 'Twen',
    3: 'Thir',
    4: 'Four',
    5: 'Fif',
    6: 'Six',
    7: 'Seven',
    8: 'Eigh',
    9: 'Nine'
  };

  let hundreds = [1, 2, 3];
  let thousands = [4, 5, 6];
  let millions = [7, 8, 9];
  let billions = [10, 11, 12];


  if (store[numString]) return store[numString];

  for (let i = 0; i < numStringRev.length; i++) {
    if ((i + 1) % 3 === 0) output = store[numStringRev[i]] + 'Hundred' + output;
  }

  return output;
}

console.log(numToWords(1800));

module.exports = numToWords;
