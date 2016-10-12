"use strict"
/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  if (typeof n !== 'number') { return NaN };
  if (n - Math.trunc(n) !== 0) { return undefined };
  let returnStrArr = [];
  const thousands = Math.trunc(n/1000);
  const hundreds = Math.trunc((n - thousands * 1000)/100);
  const tens = Math.trunc((n - thousands * 1000 - hundreds * 100)/10);
  const ones = Math.trunc((n - thousands * 1000 - hundreds * 100 - tens * 10));
  
  console.log(thousands, hundreds, tens, ones);

  //Handle thousands
  const thousandsStr = 'M'.repeat(thousands);
  const hundredsStr = 'C'.repeat(hundreds);
  const tensStr = 'X'. repeat(tens);
  let onesStr ='';
  switch (ones) {
    case 9:
      onesStr = 'IX';
      break;
    case 8:
      onesStr = 'VIII';
      break;
    case 7:
      onesStr = 'VII';
      break;
    case 6:
      onesStr = 'VI';
      break;
    case 5:
      onesStr = 'V';
      break;
    case 4:
      onesStr = 'IV';
      break;
    default: 
      console.log(ones);
      onesStr = 'I'.repeat(ones);
  }
  const total = thousandsStr + hundredsStr + tensStr + onesStr;
  console.log(thousandsStr, hundredsStr, tensStr, onesStr);


}

module.exports = romanNumeral;

romanNumeral(1000);
romanNumeral(1100);
romanNumeral(1110);
romanNumeral(1111);
romanNumeral(8);
romanNumeral(9);
romanNumeral(7);
romanNumeral(6);
romanNumeral(5);
romanNumeral(4);
romanNumeral(3);
romanNumeral(2);
romanNumeral(1);