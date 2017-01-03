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
    const numeralSingles = ['I', 'V', 'X'];
    const numeralTens = ['X', 'L', 'C'];
    const numeralHundreds = ['C', 'D', 'M'];
    const numeralThousands = ['M'];
    let numerals;
    let result = '';
    let numString = n.toString();

    for (let i = numString.length - 1; i >= 0; i--) {
            if (i === 0) numerals = numeralSingles;
            if (i === 1) numerals = numeralTens;
            if (i === 2) numerals = numeralHundreds;
            if (i === 3) numerals = numeralThousands;

            if (numString[numString.length - 1 - i] === '0');
            if (numString[numString.length - 1 - i] === '1') result += numerals[0];
            if (numString[numString.length - 1 - i] === '2') result += numerals[0] + numerals[0];
            if (numString[numString.length - 1 - i] === '3') result += numerals[0] + numerals[0] + numerals[0];
            if (numString[numString.length - 1 - i] === '4') result += numerals[0] + numerals[1];
            if (numString[numString.length - 1 - i] === '5') result += numerals[1];
            if (numString[numString.length - 1 - i] === '6') result += numerals[1] + numerals[0];
            if (numString[numString.length - 1 - i] === '7') result += numerals[1] + numerals[0] + numerals[0];
            if (numString[numString.length - 1 - i] === '8') result += numerals[1] + numerals[0] + numerals[0] + numerals[0];
            if (numString[numString.length - 1 - i] === '9') result += numerals[0] + numerals[2];
        }

    return result;
}

console.log(romanNumeral(1567));

module.exports = romanNumeral;