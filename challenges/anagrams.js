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
  function pluck(subset, idx) {
    const char = subset[idx];

    let newStr = '';
    for (let i = 0; i < subset.length; i++) {
      if (i === idx) continue;
      newStr += subset[i];
    }

    return { char, newStr }; 
  }

  function _anagrams(subset, anagram='') {
    if (subset.length < 1) anagramsStore.push(anagram);

    for (let i = 0; i < subset.length; i++) {
      const { char, newStr } = pluck(subset, i);
      _anagrams(newStr, anagram + char);
    }
  }

  const anagramsStore = [];
  _anagrams(string);
  return anagramsStore;
}

console.log(anagrams('cat'))

module.exports = anagrams;
