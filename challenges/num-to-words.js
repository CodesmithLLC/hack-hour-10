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
  var TEN = 10;
  var ONE_HUNDRED = 100;
  var ONE_THOUSAND = 1000;
  var ONE_MILLION = 1000000;
  var ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
  var ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
  var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
  var MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)

  var LESS_THAN_TWENTY = [
      'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  var TENTHS_LESS_THAN_HUNDRED = [
      'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  
}

module.exports = numToWords;
