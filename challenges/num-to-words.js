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
  if (num = 0) return 'zero';
  if (typeof num === 'string') {
    num = parseInt(num, 10);
  }
  if (typeof num === 'number' && !isNaN(num) && isFinite(num)) {
    num = num.toString(10);
  }
  else {
    return null;
  }
  var digits = num.split('');
  var digitsNeeded = 3 - digits.length % 3;
  if (digitsNeeded !== 3) {
    while (digitsNeeded > 0) {
      digits.unshift('0');
      digitsNeeded--;
    }
  }
  var digitsGroup = [];
  var numberOfGroups = digits.length / 3;
  for (var i = 0; i < numberOfGroups; i++) {
    digitsGroup[i] = digits.splice(0, 3);
  }
  var digitsGroupLen = digitsGroup.length;
  var numTxt = [
    [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
    [null, 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
    [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
  ];
  var tenthsDifferent = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  for (var j = 0; j < digitsGroupLen; j++) {
    for (var k = 0; k < 3; k++) {
      var currentValue = digitsGroup[j][k];
      digitsGroup[j][k] = numTxt[k][currentValue]
      if (k === 0 && currentValue !== '0') {
        digitsGroup[j][k] += 'Hundred';
      }
      else if (k === 1 && currentValue === '1') {
        digitsGroup[j][k] = tenthsDifferent[digitsGroup[j][2]];
        digitsGroup[j][2] = 0;
      }
    }
  }

  for (var l = 0; l < digitsGroupLen; l++) {
    if (digitsGroup[l][1] && digitsGroup[l][2]) {
      digitsGroup[l][1] += '';
    }
    digitsGroup[l].filter(function (e) { return e !== null });
    digitsGroup[l] = digitsGroup[l].join('');
  }

  var posfix = [null, 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion'];
  if (digitsGroupLen > 1) {
    var posfixRange = posfix.splice(0, digitsGroupLen).reverse();
    for (var m = 0; m < digitsGroupLen - 1; m++) {
      if (digitsGroup[m]) {
        digitsGroup[m] += posfixRange[m];
      }
    }
  }
  return digitsGroup.join('')
}

module.exports = numToWords;
