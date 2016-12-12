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
  if (!string) return '';
  
  const results = [];

  function permute(arr, stringAccum) {
    let cur, memo = stringAccum || ''; // stringAccum constructs each permutation string

    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1); // each iteration removes an element, which is replaced on line 29

      if (arr.length === 0) {
        results.push(memo+cur);
      } // base case of recursive permute() function - pushes completed permutation to 'results'
      
      permute(arr.slice(), memo+cur); // calls permute() on copy of truncated array, passes stringAccum
      arr.splice(i, 0, cur); // replaces removed element so the original array can be worked on again
    }

    return results;
  }

  return permute(string.split('')); // call permute() with the array-ified input string
  
}

module.exports = anagrams;


