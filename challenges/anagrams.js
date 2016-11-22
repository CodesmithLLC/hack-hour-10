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
  var result = [];
  function find(n, arr) {
    if(n === 1) {
      result.push(arr.join(''));
      return;
    }
    else {
      for(let i = 0; i < n-1; i++) {
        find(n - 1, arr);
        if( n % 2 === 0) {
          var temp = arr[i];
          arr[i] = arr[n-1];
          arr[n-1] = temp;
        }
        else {
          var temp = arr[0];
          arr[0] = arr[n-1];
          arr[n-1] = temp;
        }
      }
      find(n - 1, arr);
    }
  }
  find(string.length, string.split(''));
  return result;
}

console.log(anagrams('abc'));

module.exports = anagrams;
