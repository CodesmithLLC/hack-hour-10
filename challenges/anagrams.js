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
  const recurse = (staticSubString, dynamicSubString) => {
    console.log('staticSubString: ', staticSubString, ' dynamicSubString: ', dynamicSubString);
    console.log('---------------');
    // base case: we have reached a leaf on the tree of receursions,
    // and the dynamic part of the string is empty
    if (!dynamicSubString.length) return staticSubString;
    // fire off a tree of recursive calls, one for each char in dynamicSubString
    // and collect their results (which will be an anagram if we've hit a leaf,
    // or an array of 'grams from the leaves below otherwise )
    let ngrams = [];
    for (let i = 0; i < dynamicSubString.length; i++) {
      ngrams = ngrams.concat(
        recurse(staticSubString.concat(dynamicSubString[i]), dynamicSubString.slice(0, i).concat(dynamicSubString.slice(i + 1, dynamicSubString.length)))
      );
    }
    console.log('ngrams assembled: ', ngrams);
    return ngrams;
  }
  return recurse('', string);
}
console.log(anagrams('ahmad kanawi'));
module.exports = anagrams;
