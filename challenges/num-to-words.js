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

  // Base case.
  if (!num) return 'Zero';

  // Numbers to account for.
  const keyArr = [
    1000000000000000,
    1000000000000,
    1000000000,
    1000000,
    1000,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    14,
    13,
    12,
    11,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
  ];

  // Mapping numbers to words.
  const keyObj = {
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
    90: 'Ninety',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
    1000000000000: 'Trillion',
    1000000000000000: 'Quadrillion'
  }

  // Word to return. Use var over let for better performance.
  var words = '';

  // Main loop. Handle biggest numbers first.
  for (let i = 0, n = num; n > 0; i++) {

    // If remaining number is bigger/equal to number we are looking at in keyArr.
    if (n >= keyArr[i]) {

      // Count represents how many of that number in keyArr.
      const count = Math.floor(n / keyArr[i]);

      // Only add count into words if count is more than one. Or if number
      // is Hundred, Thousand, Million, Billion, Trillion, or Quadrillion
      // then we do want to add 'One' into words.
      if (count > 1 || i < 6) words += numToWords(count);

      // Add number into words.
      words += keyObj[keyArr[i]];
      
      // Subtract amount that was just accounted for.
      n -= count * keyArr[i];
    }
  }

  // Return string of words.
  return words;
}

module.exports = numToWords;
