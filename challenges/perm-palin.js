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
if (str.constructor !== String) {
  return false;
}
let chars = {};
let odd = false;
let pal = true;

for (let i = 0; i < str.length; i++) {
  chars[str[i]] === undefined ? chars[str[i]] = 1 : chars[str[i]]++;
}

for (let key in chars) {
  if (chars[key] % 2 !== 0 && odd === false) {
    odd = true;
  }
  else if (chars[key] % 2 !== 0 && odd === true) {
    pal = false;
  }
}
return pal;
}

module.exports = permPalin;