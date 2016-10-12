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

  const ones = { 
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
  }
  const tens = {
    1 : 'X',
    4 : 'XL',
    5 : 'L',
    9 : 'XC',
  }
  const hundreds = {
    1: 'C',
    4: 'CD',
    5: 'D',
    9: 'CM',
  }
  const thousands = {
    1: 'M'
  }
  const dictionary = { 
    0: ones,
    1: tens,
    2: hundreds,
    3: thousands
  }
  // create array of digits
  const digits = [], romanNumeralStorage = [];
  let decimalN = n;
  while (decimalN > 0) {
    digits.push(decimalN % 10);
    decimalN = Math.floor(decimalN / 10);
  }

  function convertDigit(number, romanNumerals) {
    if (number === 0) return '';
    if (Object.keys(romanNumerals).length === 1) {
      if (number > 1) return 'M' + convertDigit(number - 1, romanNumerals);
    }
    if (number === 5) return romanNumerals[number];
    if (number === 1) return romanNumerals[number];
    if (number === 9) return romanNumerals[number];
    if (number > 5) return romanNumerals[5] + convertDigit(number - 5, romanNumerals);
    if (number === 4) return romanNumerals[number]
    if (number > 1) return romanNumerals[1] + convertDigit(number - 1, romanNumerals);
  }

  digits.forEach((digit, index) => {
    const translation = dictionary[index];
    romanNumeralStorage.push(convertDigit(digit, translation));
  })

  return romanNumeralStorage.reverse().join('')
}

console.log(romanNumeral(7fa));
module.exports = romanNumeral;