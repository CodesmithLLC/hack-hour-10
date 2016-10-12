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
  let romans = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' }
  let roman = '';
  let num = n;
  let floor, cat;
  while (num > 0) {
    if (num >= 1000) {
      floor = Math.floor(num / 1000);
      cat = romans[1000].repeat(floor);
      roman += cat;
      num = num - 1000 * floor;
    }
    else if (num >= 900) {
      roman += romans[100] + romans[1000];
      num = num - 900;
    }
    else if (num >= 500) {
      floor = Math.floor(num / 500);
      cat = romans[500].repeat(floor);
      roman += cat;
      num = num - 500 * floor;
    }
    else if (num >= 400) {
      roman += romans[100] + romans[500];
      num = num - 900;
    }
    else if (num >= 100) {
      floor = Math.floor(num / 100);
      cat = romans[100].repeat(floor);
      roman += cat;
      num = num - 100 * floor;
    }
    else if (num >= 90) {
      roman += romans[10] + romans[100];
      num = num - 90;
    }
    else if (num >= 50) {
      floor = Math.floor(num / 50);
      cat = romans[50].repeat(floor);
      roman += cat;
      num = num - 50 * floor;
    }
    else if (num >= 40) {
      roman += romans[10] + romans[50];
      num = num - 40;
    }
    else if (num >= 10) {
      floor = Math.floor(num / 10);
      cat = romans[10].repeat(floor);
      roman += cat;
      num = num - 10 *  floor;
    }
    else if (num >= 9) {
      roman += romans[1] + romans[10];
      num = num - 9;
    }
    else if (num >= 5) {
      floor = Math.floor(num / 5);
      cat = romans[5].repeat(floor);
      roman += cat;
      num = num - 5 * floor;
    }
    else if (num >= 4) {
      roman += romans[1] + romans[5];
      num = num - 4;
    }
    else if (num >= 1) {
      floor = Math.floor(num / 1);
      cat = romans[1].repeat(floor);
      roman += cat;
      num = num - 1 * floor;
    }
  }

  return roman;
}

module.exports = romanNumeral;
console.log(romanNumeral(999));