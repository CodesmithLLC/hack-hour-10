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

function checkPalin(str) {
  const reverse = str.split('').reverse().join('');
  if (str === reverse) return true;
  return false;
}

function permPalin(str, concat = '') {
  // What is a palindrome?
  // A palindrome is a string that is the same when it is reversed
  if (str.length < 1) return checkPalin(concat);
  return permPalin(str.slice(1), concat + str[0]) || str.slice(2);
}

console.log(permPalin('tart'));

module.exports = permPalin;