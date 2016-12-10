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
  if (typeof str !== 'string') { return undefined; }
  if (str.length === 1) { return true; }
  str = str.replace(' ', '');
  const strArray = str.split('');
  const tracker = {};
  strArray.forEach((val) => {
    if (!tracker[val]) {
      tracker[val] = 1;
    } else {
      tracker[val] += 1;
    }
  });
  let nonEvenCounter = 0;
  for (prop in tracker) {
    const count = tracker[prop];
    if (count % 2 !== 0) { nonEvenCounter++; }
  }
  return nonEvenCounter <= 1;
}
// console.log(permPalin('abab')); // => true
// console.log(permPalin('cbaba')); // => true
// console.log(permPalin('cbac')); // => false
// console.log(permPalin('a')); // => true

module.exports = permPalin;