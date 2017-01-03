<<<<<<< HEAD
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
  function catLargest(x) {
    floor = Math.floor(num / x);
    cat = romans[x].repeat(floor);
    roman += cat;
    num = num - x * floor;
  }
  while (num > 0) {
    if (num >= 1000) {
      catLargest(1000);
    }
    else if (num >= 900) {
      roman += romans[100] + romans[1000];
      num = num - 900;
    }
    else if (num >= 500) {
      catLargest(500)
    }
    else if (num >= 400) {
      roman += romans[100] + romans[500];
      num = num - 900;
    }
    else if (num >= 100) {
      catLargest(100);
    }
    else if (num >= 90) {
      roman += romans[10] + romans[100];
      num = num - 90;
    }
    else if (num >= 50) {
      catLargest(50);
    }
    else if (num >= 40) {
      roman += romans[10] + romans[50];
      num = num - 40;
    }
    else if (num >= 10) {
      catLargest(10)
    }
    else if (num >= 9) {
      roman += romans[1] + romans[10];
      num = num - 9;
    }
    else if (num >= 5) {
      catLargest(5);
    }
    else if (num >= 4) {
      roman += romans[1] + romans[5];
      num = num - 4;
    }
    else if (num >= 1) {
      catLargest(1);
    }
  }

  return roman;
}

module.exports = romanNumeral;
console.log(romanNumeral(1000));
=======
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

}

module.exports = romanNumeral;
>>>>>>> 3cc9072cf0284552b5c26e4ef03d47661c5a7ede
