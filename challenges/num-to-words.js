// Write a function that takes a number as an argument and returns
//  its english word representation as a string.
//  Answers should be in upper camel case (a.k.a. Pascal case).
//  Don't worry about spaces.
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
  if (!num || typeof num !== 'number') return "";
  const ones = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
  }
  const tens = {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13 : 'Thirteen',
    14 : 'Fourteen',
    15 : 'Fifteen',
    16 : 'Sixteen',
    17 : 'Seventeen',
    18 : 'Eighteen',
    19: 'Nineteen',
    20 : 'Twenty'
    }

    while (num.length % 6 !== 0){
      num = '0' + num
    }
    let slice = 3;
    let prevSlice = 0;
    const arr = [];
    if (num.length % 3 === 0){
      num = num.split('')
      console.log(num);
      while (slice <= num.length){
        arr.push(num.slice(prevSlice,slice).join(""))
        prevSlice = slice
        slice = slice + 3;
      }
    }
      while (arr[0] === '0'){
          arr.shift();
      }
      console.log(arr);
      for (let i = 0; i < arr.length;i+=1){
        
      }
  }

  numToWords(3000)
module.exports = numToWords;
