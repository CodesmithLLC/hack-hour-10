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
  if (num === 0) return '0';
  const ones = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  }
  const teens = {
    0: 'Ten',
    1: 'Eleven',
    2: 'Twelve',
    3: 'Thirteen',
    4: 'Forteen',
    5: 'Fifteen',
    6: 'Sixteen',
    7: 'Seventeen',
    8: 'Eighteen',
    9: 'Nineteen',
  }
  const tens = {
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
  }
  const magnitudes = {
    3: 'Thousand',
    4: 'Thousand',
    5: 'Thousand',
    6: 'Million',
    7: 'Million',
    8: 'Million',
    9: 'Billion',
    10: 'Billion',
    11: 'Billion',
    12: 'Trillion',
    13: 'Trillion',
    14: 'Trillion',
    15: 'Quadrillion',
    16: 'Quadrillion',
    17: 'Quadrillion',
  }
  function getNumInfo(num) {
    let powersOfTen = 0;
    while (num > 9) {
      powersOfTen += 1;
      num /= 10;
    }
    return { firstDigit: Math.floor(num), powersOfTen };
  }

  function buildWord(num, word) {
    console.log(num, word);
    if (num == 0) return word;
    if (num < 10) return word += ones[num];
    if (num < 20) return word += teens[num % 10];
    if (num < 100) return buildWord(num % 10, word + tens[Math.floor(num / 10)])
    if (num < 1000) return buildWord(num % 100, word + ones[Math.floor(num / 100)] + 'Hundred')

    const numInfo = getNumInfo(num);
    let translation;

    if (numInfo.powersOfTen % 3 > 0) {
      return buildWord(Math.floor(num / (Math.pow(10, numInfo.powersOfTen - numInfo.powersOfTen % 3))), word) + magnitudes[numInfo.powersOfTen] + buildWord(num % (Math.pow(10, numInfo.powersOfTen - numInfo.powersOfTen % 3)), '')
    }
    else {
      return buildWord(Math.floor(num % (Math.pow(10, numInfo.powersOfTen))), word + ones[numInfo.firstDigit] + magnitudes[numInfo.powersOfTen])
    }
  }

  return buildWord(num, '');
}

module.exports = numToWords;
