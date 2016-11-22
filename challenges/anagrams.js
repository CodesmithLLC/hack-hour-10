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
  let memo = [];
  function ranagrams(string, curr = "") {
    // console.log(`string ${string} with curr ${curr}`);
    if(string.length === 0){
      // console.log(`found base: ${curr}`);
      memo.push(curr);
    }
    for(let i = 0; i < string.length; ++i){
      // console.log(`string ${string} recursing on string ${string.slice(0,i) + string.slice(i+1, string.length)}`);
      ranagrams(string.slice(0,i) + string.slice(i+1, string.length), curr + string[i]);
    }
    return memo;
  }
  return ranagrams('abc');
}

module.exports = anagrams;
