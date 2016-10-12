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

'use strict'

function romanNumeral(n) {
    let output = '';
    let j;
    let romStore = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }

    for (j in romStore) {
        while (n >= romStore[j]) {
            output += j;
            n -= romStore[j];
        } 
    }

    return output;

}

console.log(romanNumeral(10));
console.log(romanNumeral(40));
console.log(romanNumeral(50));
console.log(romanNumeral(55));
console.log(romanNumeral(101));
console.log(romanNumeral(205));

module.exports = romanNumeral;