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

// a string can be rearranged into a palindrome iff all characters are repeated an even number of times, 
// or if only one character is repeated an odd number of times

function permPalin(str) {

  // create a map of character frequencies modulo 2
  const charCounts = {};
  str.split('').forEach((char) => {
    if (charCounts[char] === undefined) charCounts[char] = 1;
    else charCounts[char] = (charCounts[char] + 1) % 2;
  });

  // sum the frequencies
  const charMod2Sum = Object.keys(charCounts).reduce((prev, curr) => prev + charCounts[curr], 0);
  return charMod2Sum <= 1;
}

module.exports = permPalin;