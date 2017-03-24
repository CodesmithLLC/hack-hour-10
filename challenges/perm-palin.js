/**
 * Given a string with only alphabetic characters,
 * determine if any of the permutations of that string is a palindrome.
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {

  // Palindrome helper function used after creating all permutations
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  // Store all permutations as array of arrays
  function permutator(inputArr) {
    const results = [];
  
    // Recursively build each permutation and store in results at base case
    function permute(arr, memo=[]) {
      let curr;
  
      for (let i = 0; i < arr.length; i++) {
        curr = arr.splice(i, 1);
        if (arr.length === 0) results.push(memo.concat(curr));
        permute(arr.slice(), memo.concat(curr));
        arr.splice(i, 0, curr[0]);
      }
  
      return results;
    }
  
    return permute(inputArr);
  }
  
  // Check if any permutation is a palindrome
  permutations = permutator(str.split(""));
  for (let j = 0; j < permutations.length; j++) {
    const word = permutations[j].join('');
    if (isPalindrome(word)) return true;
  }

  // If no palindromes found in loop, then none exist!
  return false;
}

// console.log(permPalin('ogggodd'));
// console.log(permPalin('vasvas'));
// console.log(permPalin('a'));

module.exports = permPalin;