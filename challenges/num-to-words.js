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

function numToWords(n) {
  let words = ['Quadrillion', 'Trillion', 'Billion', 'Million', 'HundredThousand', 'TenThousand', 'Thousand', 'Hundred', 'Ninety', 'Eighty', 'Seventy', 'Sixty', 'Fifty', 'Fourty', 'Thirty', 'Twenty', 'Nineteen', 'Eighteen', 'Seventeen', 'Sixteen', 'Fifteen', 'Fourteen', 'Thirteen', 'Twelve', 'Eleven', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One' ];
  
  let teens = ['Nineteen', 'Eighteen', 'Seventeen', 'Sixteen', 'Fifteen', 'Fourteen', 'Thirteen', 'Twelve', 'Eleven', 'Ten'];

  // let twos = ['Ninety', 'Eighty', 'Seventy', 'Sixty', 'Fifty', 'Fourty', 'Thirty', 'Twenty'];
  // let ones = ['Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One'];
  let ones = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  let nums = [1000000000000000, 1000000000000, 1000000000, 1000000, 100000, 10000, 1000, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(words.length, nums.length)
  let result = '';

  for (let i = 0; i < nums.length; i++) {
    if (n > 99) {
      let temp = '';
      // while (n >= nums[i]) {
      //   n -= nums[i];
      //   result += words[i];
      // }
    }
    else {
      while (n >= nums[i]) {
        n -= nums[i];
        result += words[i];
      }
    }
  } 

  return result;
}

console.log(numToWords(9));

module.exports = numToWords;
