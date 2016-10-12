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
if (n.constructor !== Number) return 'input must be a valid number';
const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const numerals = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
let inputNum = n;
let outputStr = '';
let i = numbers.length - 1;

while (inputNum > 0) {
  if (inputNum >= numbers[i]) {
  	inputNum -= numbers[i];
  	outputStr += numerals[i];
  } else { i--; }
}
return outputStr;
}

module.exports = romanNumeral;