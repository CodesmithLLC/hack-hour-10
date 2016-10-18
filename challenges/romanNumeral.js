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
let lookUp = {
  1: 'I'
  2: 'II'
  3: 'III'
  4: 'IV'
  5: 'V'
  6: 'VI'
  7: 'VII'
  8: 'VIII'
  9: 'IX'
  10: 'X',
}
if(n < 10){
  return lookUp[n];
}
}

module.exports = romanNumeral;
