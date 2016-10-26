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
const singleDigits = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
];
tens = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',
];
mags = [
  '',
  'Thousand',
  'Million',
  'Billion',
  'Trillion',
  'Quadrillion',
];

function numToWords(num) {
  if (!num || typeof num !== 'number') return '';
  if (num === 0) return 'Zero';
  numString = num.toString();
  let chunkArr = [];
  while (numString.length) {
    chunkArr.unshift(numString.slice(-3));
    numString = numString.slice(0, -3);
  }
  // console.log(chunkArr);
  let magnitude = 0;
  let result = '';
  while (chunkArr.length) {
    let stringifiedChunk = '';
    const currChunk = chunkArr.pop();
    // console.log('CurrChunk:', currChunk);
    if (currChunk.length === 3 && currChunk[0] !== '0') {
      stringifiedChunk += singleDigits[parseInt(currChunk[0])] + 'Hundred';
    }
    if (parseInt(currChunk.slice(-2)) >= 20) {
      stringifiedChunk += tens[parseInt(currChunk.slice(-2, -1))];
      stringifiedChunk += singleDigits[parseInt(currChunk.slice(-1))];
    } else {
      stringifiedChunk += singleDigits[parseInt(currChunk.slice(-2))];
    }
    if (parseInt(currChunk) !== 0) stringifiedChunk += mags[magnitude];
    magnitude++;
    // console.log('Stringed Chunk:', stringifiedChunk);
    stringifiedChunk += result;
    result = stringifiedChunk;
    }
    return result;
  }
module.exports = numToWords;
console.log(numToWords(43));
