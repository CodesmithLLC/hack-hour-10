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
  const biggies = ['', 'thousand', 'million', 'billion', 'trillion'];
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const toArrayOfOnes = [];
  
  num.toString().split('').forEach((n) => {
    if (n === '0') toArrayOfOnes.push('zero');
    if (n === '1') toArrayOfOnes.push('one');
    if (n === '2') toArrayOfOnes.push('two');
    if (n === '3') toArrayOfOnes.push('three');
    if (n === '4') toArrayOfOnes.push('four');
    if (n === '5') toArrayOfOnes.push('five');
    if (n === '6') toArrayOfOnes.push('six');
    if (n === '7') toArrayOfOnes.push('seven');
    if (n === '8') toArrayOfOnes.push('eight');
    if (n === '9') toArrayOfOnes.push('nine');
  });
  
  return toArrayOfOnes;

  
}


module.exports = numToWords;