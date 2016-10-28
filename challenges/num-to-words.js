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
function oneToTwenty(num) {
  if (num === 1) return 'One';
  if (num === 2) return 'Two';
  if (num === 3) return 'Three';
  if (num === 4) return 'Four';
  if (num === 5) return 'Five';
  if (num === 6) return 'Six';
  if (num === 7) return 'Seven';
  if (num === 8) return 'Eight';
  if (num === 9) return 'Nine';
  if (num === 10) return 'Ten';
  if (num === 11) return 'Eleven';
  if (num === 12) return 'Twelve';
  if (num === 13) return 'Thirteen';
  if (num === 14) return 'Fourteen';  
  if (num === 15) return 'Fifteen';
  if (num === 16) return 'Sixteen';
  if (num === 17) return 'Seventeen';
  if (num === 18) return 'Eighteen';
  if (num === 19) return 'Ninteen';
  if (num >= 20 && num < 30) return 'Twenty';
  if (num >= 30 && num < 40) return 'Thirty';
  if (num >= 40 && num < 50) return 'Forty';
  if (num >= 50 && num < 60) return 'Fifty';
  if (num >= 60 && num < 70) return 'Sixty';
  if (num >= 70 && num < 80) return 'Seventy';
  if (num >= 80 && num < 90) return 'Eighty';
  if (num >= 90 && num < 100) return 'Ninty';
}


function numToWords(num) {
  if (typeof num !== 'number') return 'invalid input';
  if (num > 999999999999999999) return 'dat numbah too big fo me';

  let numStr = num.toString().reverse();
  let numsArr = [];
  let numSeg = '';
  for (let i = 0; i < numStr.length; i++) {
    numSeg.concat(numStr[i]);
    if (i % 3 === 2) {
      numsArr.push(numSeg);
      numSeg = '';
    }
  }
  if (numSeg.length > 0) numsArr.push(numSeg);

  let result = '';
  let length = numsArr.length;
  
  let triples = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  let tripleStr = '';
  for (let i = length-1; i <= 0; i++) {
    
  }

}

module.exports = numToWords;
