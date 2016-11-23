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
  var store = [];
  var total = 1;
  for (var i = string.length; i > 0; i--) { 
    total *= i;
  }
  var holder = string.split('');
  function permute(array, storing) {
    if (storing.length === total) return null;
    else {
      storing.push(array.join(''));
      permute(array.slice(1).concat(array[0]), storing)
      var lastIndex = array.length - 1
      permute(array[lastIndex].concat(array.slice(0, lastIndex)), storing)
    }
  }
  permute(holder, store); 
  
  return store;
}

module.exports = anagrams;
