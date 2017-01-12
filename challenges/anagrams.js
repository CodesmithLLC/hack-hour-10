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

function anagrams(string = '', rem = '', all = []) {
    const unique = Object.keys(string.split('').reduce((a, c) => {
      a[c] = true;
      return a
    }, {})).join('')

    if (!unique) all.push(rem)
    else unique.split('').forEach((e, i) => anagrams(unique.slice(0, i).concat(unique.slice(i + 1)), rem.concat(e), all))

    return all
}

module.exports = anagrams;
