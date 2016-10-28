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
  let cache = {};
  let odd = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (cache[letter]) cache[letter]++;
    else cache[letter] = 1;
  }

  for (let key in cache) {
    if (cache[key]%2!==0) odd++;
  }

  return odd <= 1;
}

module.exports = permPalin;