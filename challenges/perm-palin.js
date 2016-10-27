/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    if (str.length === 1) return true;
    else {
        let length = str.length;
        for (let i = 0; i < length; i++) {
            if (str.length !== 1) {
                let reverse = str.split('').reverse().join('');
                console.log(str, reverse)
                if (str === reverse) return true;
                else {
                    str = str.slice(1, str.length);
                }
            }
        }
        return false;
    }
}

module.exports = permPalin;