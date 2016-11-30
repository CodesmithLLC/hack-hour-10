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
  if (!string.length) return [''];
  if (string.length === 1) return string;
  const result = [];

  for (let i = 0; i < string.length; i++) {
    let start = string[0];
    let perm = anagrams(string.slice(1, string.length));
    for (let j = 0; j < perm.length; j++)  {
      result.push(start + perm[j]);
    }
    string = string.substr(1, string.length - 1) + start;
  }
    
  const cache = {};
  for (let i = 0; i < result.length; i++) {
    cache[result[i]] = 1;
  }

  return Object.keys(cache);  
}

// var result = anagrams('abc');
// console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

module.exports = anagrams;