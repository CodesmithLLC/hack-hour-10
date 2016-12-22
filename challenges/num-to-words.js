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
  if(num === 0) return 'Zero';
  if(typeof num !== 'number') return;
  let numWord = '';
  let numbers = {
    1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine',
    10: 'Ten', 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen',
    18: 'Eighteen', 19: 'Nineteen', 20: 'Twenty', 30: 'Thirty', 40: 'Fourty', 50: 'Fifty', 60: 'Sixty', 70: 'Seventy',
    80: 'Eighty', 90: 'Ninety', 100: 'Hundred'
  }
  let thousands = ['Quadrillion', 'Trillion', 'Billion', 'Million', 'Thousand', ''];
  let numString = String(num);
  while(numString.length % 3 !== 0) {
    numString = '0' + numString;
  }
  let numArray = [];
  for( i = 0; i < numString.length; i+=3 ) {
    numArray.push(numString.slice(i, i+3));
  }
  while(thousands.length > numArray.length) {
    thousands.shift();
  }
  numArray.forEach( (ele, index) => {
    console.log(ele);
    for(let i = 0; i < ele.length; i++) {
      if( ele[i] !== '0' ) {
        if( i === 0) {
          numWord += numbers[ele[i]] + numbers[100];
        }
        else if( i === 1 && ele[i] !== '1' ) {
          numWord += numbers[ele[i] + '0'];
        }
        else if( i === 1 && ele[i] === '1' ) {
          numWord += numbers[ele[i] + ele[++i]];
        }
        else if( i === 2 && ele[i] !== 0 ) {
          numWord += numbers[ele[i]];
        }
      } 
    }
    numWord += thousands.shift();
  });
  return numWord;
  
}

module.exports = numToWords;
