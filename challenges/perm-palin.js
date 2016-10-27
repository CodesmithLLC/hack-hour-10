
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
  // to be a palindrome, all letters must have a mirror, minus
  // one for odd-length strings.
  if (str.length === 0) return false;
  let charCountObj = {};
  str.split('').forEach(char => {
    charCountObj[char] = ++charCountObj[char] || 1;
  });
  // console.log('charCountObj: ', charCountObj);
  const matchedLetters = Object.keys(charCountObj).filter(key => {
    return charCountObj[key] % 2 === 0;
  });
  // console.log('matchedLetters:', matchedLetters);
  if ((Object.keys(charCountObj).length - matchedLetters.length) <= 1) return true;
  return false;
}

module.exports = permPalin;
