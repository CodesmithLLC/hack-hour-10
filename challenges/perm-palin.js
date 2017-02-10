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
    return str.split("").map((e, i, arr) => { return arr.reduce((a, c) => { if (e === c) a++; return a; }, 0) }).reduce((a, c) => { if (c % 2 === 1) a++; return a; }, 0) < 2
}

module.exports = permPalin;
