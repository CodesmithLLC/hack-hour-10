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
  let obj = {};
  helper('', string);
  return Object.keys(obj);
  function helper(word, letrs){
    if(letrs.length === 0) return obj[word] = '';
    for (let i = 0; i < letrs.length; i++){
      helper(word + letrs[i], letrs.slice(0,i) + letrs.slice(i + 1));
    }
  }
}

module.exports = anagrams;
