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

function anagrams(string, built = '', all = {}) {
  if (!string) all[built] = true;
  else string.split('').forEach((char, index) => anagrams(string.slice(0, index).concat(string.slice(index + 1)), built.concat(char), all));
  return Object.keys(all);
}

module.exports = anagrams;
