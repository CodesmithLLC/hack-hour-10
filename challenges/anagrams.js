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
  let result = [];
  let num = string.length;
  let counter = 0;
  
  function recurser(perm, string, counter) {
    if (counter === num) {
      return result.push(perm);
    }
    for (let i = 0; i < string.length; i++) {
      recurser(perm+string[i], string.slice(0,i)+string.slice(i+1), counter+1);
    }
  }
  recurser('', string, counter);
  return result;
}

module.exports = anagrams;
