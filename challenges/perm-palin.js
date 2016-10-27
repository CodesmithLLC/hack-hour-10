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
    const letterCounts = {};
    if (str.length === 1) return true;
    if (!str) return false;
    let letter;
    let palindromeSum = 0;
    for (let i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (let letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }
    console.log(palindromeSum);
    return palindromeSum < 1;
    }
permPalin('cbaba');
module.exports = permPalin;
