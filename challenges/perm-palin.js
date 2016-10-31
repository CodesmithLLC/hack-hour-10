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

// This is a helper to create all the possible permutations
// It plucks out a character and returns the remaining str
function pluck(str, position) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (i === position) continue;
    newStr += str[i];
  }

  return newStr;
}

// Checks if the string is a palindrome in a non-optimized way =)
function check(str) {
  const normalizedStr = str.replace(/[^\w]/g, '').toLowerCase();
  return normalizedStr.split('').reverse().join('') === normalizedStr;
}

function permPalin(str, concat = '') {
  if (str.length < 1 && check(concat)) return true;

  for (let i = 0; i < str.length; i++) {
    if (permPalin(pluck(str, i), concat + str[i])) return true;
  }

  return false;
}

module.exports = permPalin;

function permPalin2(str) {
  const normalizedStr = str.replace(/[^\w]/g, '').toLowerCase();

  const store = {};

  // Count the characters of str and store in an object
  for (let i = 0; i < normalizedStr.length; i++) {
    const char = normalizedStr[i];
    if (!store[char]) store[char] = 0;
    store[char]++;
  }

  let oddCount = 0;
  for (const count in store) {
    if (store[count] % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
}