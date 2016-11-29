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

function anagrams(string) {
  const anagram = [];
  string.split(' ').forEach( (str) => {
    const recurse =  (ana, str) => {
      if (str === '') anagram.push(ana);
      str.split('').forEach((item, i) => recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1)));
    };
    recurse('', str);
  });
  return anagram;
  }



anagrams('abc');
module.exports = anagrams;
