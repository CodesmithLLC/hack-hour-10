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

   let numTranslate = {'0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine', '10': 'Ten', '11': 'Eleven',
    '12': 'Twelve', '13': 'Thirteen', '14': 'Fourteen', '15': 'Fifteen', '16': 'Sixteen', '17': 'Seventeen', '18': 'Eighteen', '19': 'Nineteen', '20': 'Twenty', '30': 'Thirty',
    '40': 'Forty', '50': 'Fifty', '60': 'Sixty', '70': 'Seventy', '80': 'Eighty', '90': 'Ninety'};

   let numArr = num.toString().split("");
   let result = "";

   while (numArr.length > 0) {
     if (numArr.length === 1) {
       console.log(numArr[0]);
       result += numTranslate[numArr.shift()];
     } else if (numArr.length === 2) {
       if (numArr[0] === '0') {
         numArr.shift();
       } else {
         result += numTranslate[numArr.splice(0,2).join("")];
       }
     } else if (numArr.length === 3) {
       result += numTranslate[numArr.shift()] + 'Hundred';
     } else if (numArr.length === 4) {
       result += numTranslate[numArr.shift()] + 'Thousand';
     }
   }

   return result;

 }

 let num = 1109;

module.exports = numToWords;
