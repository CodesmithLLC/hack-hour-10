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
    const results = [];
    const stringArr = string.split('');

    function createWord(arr, storage) {
      let current = '';
      storage = storage || [];

      for (let i = 0; i < stringArr.length; i++) {
        current = stringArr.splice(i, 1);
        if (stringArr.length === 0) {
          results.push(storage.concat(current).join(''));
        }
        createWord(stringArr, storage.concat(current));
        stringArr.splice(i, 0, current[0]);
      }
      return results;
    }
    return createWord(string);
  }

var result = anagrams('abc');
console.log(result);

module.exports = anagrams;
