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
  if (typeof n !== 'number') return NaN;

  let roman = '';

  while (n) {
    // console.log(roman, n);
    if (n >= 900) {
      if (n < 1000) {
        roman += 'CM';
        n -= 900;
      } else {
        roman += 'M';
        n -= 1000;
      }
    } else if (n >= 400) {
      if (n < 500) {
        roman += 'CD';
        n -= 400;
      } else {
        roman += 'D';
        n -= 500;
      }
    } else if (n >= 90) {
      if (n < 100) {
        roman += 'XC';
        n -= 90;
      } else {
        roman += 'C';
        n -= 100;
      }
    } else if (n >= 40) {
      if (n < 50) {
        roman += 'XL';
        n -= 40;
      } else {
        roman += 'L';
        n -= 50;
      }
    } else if (n >= 9) {
      if (n < 10) {
        roman += 'IX';
        n -= 9;
      } else {
        roman += 'X';
        n -= 10;
      }
    } else if (n >= 4) {
      if (n < 5) {
        roman += 'IV';
        n -= 4;
      } else {
        roman += 'V';
        n -= 5;
      }
    } else if (n >= 0) {
      roman += 'I';
      n -= 1;
    } else {
      return NaN;
    }
  }
  return roman;
}

console.assert(romanNumeral(1) === 'I')
console.assert(romanNumeral(3) === 'III')
console.assert(romanNumeral(4) === 'IV')
console.assert(romanNumeral(6) === 'VI')
console.assert(romanNumeral(8) === 'VIII')
console.assert(romanNumeral(9) === 'IX')
console.assert(romanNumeral(13) === 'XIII')
console.assert(romanNumeral(14) === 'XIV')
console.assert(romanNumeral(18) === 'XVIII')
console.assert(romanNumeral(19) === 'XIX')
console.assert(romanNumeral(19) === 'XIX')
console.assert(romanNumeral(40) === 'XL')
console.assert(romanNumeral(80) === 'LXXX')
console.assert(romanNumeral(90) === 'XC')
console.assert(romanNumeral(140) === 'CXL')
console.assert(romanNumeral(1000) === 'M')
console.assert(romanNumeral(1500) === 'MD')
console.assert(romanNumeral(900) === 'CM')
console.assert(romanNumeral(800) === 'DCCC')

module.exports = romanNumeral;
