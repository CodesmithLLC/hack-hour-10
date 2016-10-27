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
  if (num === 0) return 'Zero';
  const numPlace = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  num = String(num);
  while (num.length % 3 !== 0) {
    num = '0' + num;
  }

  let numArr = [];
  for (let i = 0; i < num.length; i += 3) {
    numArr.push(num.slice(i, i+3));
  }
  // console.log(numArr);
  let parsed = '';
  for (let j = 0; j < numArr.length; j++) {
    parsed += parsePlaces(numArr[j]) + numPlace[numArr.length - 1 - j];
  }
  // console.log(parsed);
  function parsePlaces(num3) {
    let parsedString = '';
    if (num3[0] !== '0') parsedString += ones[num3[0]] + 'Hundred';
    parsedString += tens[num3[1]];
    parsedString += ones[num3[2]];
    return parsedString;
  }

  return parsed
    .replace('TenOne', 'Eleven')
    .replace('TenTwo', 'Twelve')
    .replace('TenThree', 'Thirteen')
    .replace('TenFour', 'Fourteen')
    .replace('TenFive', 'Fifteen')
    .replace('TenSix', 'Sixteen')
    .replace('TenSeven', 'Seventeen')
    .replace('TenEight', 'Eighteen')
    .replace('TenNine', 'Nineteen');
}

// console.log(numToWords(2999))// -> 'TwoThousandNineHundredNintyNine'
// console.log(numToWords(113))// -> 'Fifteen'

module.exports = numToWords;
