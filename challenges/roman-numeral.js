/* 
 * Given a positive integer, return it as a string in Roman Numeral form.
 */

"use strict";

let romanDict = {
    1000 : "M",  
    900  : "CM", 40   : "XL",
    500  : "D",  10   : "X",
    400  : "CD", 9    : "IX",
    100  : "C",  5    : "V",
    90   : "XC", 4    : "IV",
    50   : "L",  1    : "I",
}

let romanKeys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
function romanNumeral(n) {
    let num = n;
    let roman = "";
    while(num>0){
        for(let i = 0; i < romanKeys.length; ++i){
            // the next logical roman numeral to use is the
            // roman value that is the first roman that is 
            // less than num
            if(romanKeys[i] <= num){
                roman += romanDict[romanKeys[i]];
                num -= romanKeys[i];
                break;
            }
        }
    }
    return roman;
}

/*console.log(`romanNumeral(530): ${romanNumeral(530)} -- expect(DXXX)`);
console.log(`romanNumeral(83): ${romanNumeral(83)} -- expect(LXXXIII)`);
console.log(`romanNumeral(84): ${romanNumeral(84)} -- expect(LXXXIV)`);
console.log(`romanNumeral(94): ${romanNumeral(94)} -- expect(XCIV)`);
console.log(`romanNumeral(99): ${romanNumeral(99)} -- expect(XCIX)`);
console.log(`romanNumeral(9): ${romanNumeral()} -- expect(IX)`);
console.log(`romanNumeral(8): ${romanNumeral()} -- expect(VIII)`);
console.log(`romanNumeral(4): ${romanNumeral()} -- expect(IV)`);
console.log(`romanNumeral(3): ${romanNumeral()} -- expect(III)`);
console.log(`romanNumeral(1): ${romanNumeral()} -- expect(I)`);
console.log(`romanNumeral(890): ${romanNumeral(890)} -- expect(DCCCXC)`);*/

module.exports = romanNumeral;