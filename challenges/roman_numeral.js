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
        1   :    'I',
        4   :    'IV',
        5   :    'V',
        9   :    'IX',
        10  :    'X',
        40  :    'XL',
        50  :    'L',
        90  :    'XC',
        100 :    'C',
        400 :    'CD',
        500 :    'D',
        900 :    'CM',
        1000:    'M'
    }

    for (j in romStore) {
        while (num >= romStore[j]) {
            output += j;
            num -= romStore[j];
        } 
    }

    return output;

}

// function romanize(num) {
//   var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
//   for ( i in lookup ) {
//     while ( num >= lookup[i] ) {
//       roman += i;
//       num -= lookup[i];
//     }
//   }
//   return roman;
// }

// romanNumeral(10);

module.exports = romanNumeral;