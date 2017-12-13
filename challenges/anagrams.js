/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(str) {
  if (str.length === 1) return [str];
  return str.split('').reduce((acc, l, i) => [...acc, ...anagrams(str.slice(0, i) + str.slice(i + 1)).map(combo => l + combo)], []);
}

module.exports = anagrams;

console.log(anagrams('abc')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
