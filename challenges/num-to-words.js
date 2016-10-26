// Write a function that takes a number as an argument and returns its english 
// word representation as a string. Answers should be in upper camel case 
// (a.k.a.Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NinetyTwoQuadrillionOneHundredTwentyTrillion'
 */

  // 0-9 digits
  // 11-19 hardcode
  // 20-90 twenty + digit
  // 100-900 digit hundred
  // 1000 digits + thousand
  // 10000 tens + thousand
  // 100000 digit + hundred + thousand
  // repeat pattern for million, billion, trillion, quadrillion

function numToWords(num) {
  if (num === undefined || typeof num !== 'number') return '';
  if (num == 0) return 'Zero';
  if (num == 11) return 'Eleven';
  if (num == 12) return 'Twelve';
  if (num == 13) return 'Thirteen';
  if (num == 14) return 'Fourteen';
  if (num == 15) return 'Fifteen';
  if (num == 16) return 'Sixteen';
  if (num == 17) return 'Seventeen';
  if (num == 18) return 'Eighteen';
  if (num == 19) return 'Nineteen';

  let result = '';
  let numStr = num.toString();
  let reversed = numStr.split('').reverse().join('');

  const digits = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const tens = ['Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  for (let i = numStr.length - 1; i >= 0; i--) {
    if ((Number(reversed[i]) - 1) < 0);
    else if (i === 0) result += digits[Number(reversed[i]) - 1];
    else if (i === 1) result += tens[Number(reversed[i]) - 1];
    else if (i === 2) result += digits[Number(reversed[i]) - 1] + 'Hundred';
    else if (i === 3) result += digits[Number(reversed[i]) - 1] + 'Thousand';
    else if (i === 4) result += tens[Number(reversed[i]) - 1];
    else if (i === 5) result += digits[Number(reversed[i]) - 1] + 'Hundred';
    else if (i === 6) result += digits[Number(reversed[i]) - 1] + 'Million';
    else if (i === 7) result += tens[Number(reversed[i]) - 1];
    else if (i === 8) result += digits[Number(reversed[i]) - 1] + 'Hundred';
    else if (i === 9) result += digits[Number(reversed[i]) - 1] + 'Billion';
    else if (i === 10) result += tens[Number(reversed[i]) - 1];
    else if (i === 11) result += digits[Number(reversed[i]) - 1] + 'Hundred';
    else if (i === 12) result += digits[Number(reversed[i]) - 1] + 'Trillion';
    else if (i === 13) result += tens[Number(reversed[i]) - 1];
    else if (i === 14) result += digits[Number(reversed[i]) - 1] + 'Hundred';
    else if (i === 15) result += digits[Number(reversed[i]) - 1] + 'Quadrillion';
    else if (i === 16) result += tens[Number(reversed[i]) - 1];
    else if (i === 17) result += digits[Number(reversed[i]) - 1] + 'Hundred';
  }

  // does not work for teens beyond one hundred or 0 in single digit place beyond one thousand  
  return result;
}

// console.log(numToWords(500300200232));

module.exports = numToWords;
