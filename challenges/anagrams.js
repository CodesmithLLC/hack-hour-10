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

const anagrams = string => {
  const results = [];
  const swap = (item, ind1, ind2) => {
    let temp = item[ind1];
    item[ind1] = item[ind2];
    item[ind2] = temp;
    return item;
  }
  
  const findAnagrams = (string, start) => {
    if (start === string.length - 1) {
      results.push(string.join(''))
      return;
    }
    
    for(var i = start; i < string.length; i++) {
      findAnagrams(swap(string, i, start), start + 1);
    }
  }
  
  findAnagrams([...string], 0);
  return results;
}


module.exports = anagrams;
