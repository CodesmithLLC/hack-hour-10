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

// Heap's algorithm
// function anagrams(string) { 
//   if (!string.length) return [''];
//   let arr = Array.from(string);
//   const permutations = [];

//   function swap(a, b) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//   }

//   function generate(n) {
//     if (n === 1) permutations.push(arr.join(''));
//     else {
//       for (let i = 0; i !== n; ++i) {
//         generate(n - 1);

//         // Odd length swaps first element. Even length swaps ith element.
//         swap(n % 2 ? 0 : i, n - 1);
//       }
//     }
//   }

//   generate(arr.length);

//   // Erase dupes
//   const objStorage = {};
//   permutations.forEach(perm => objStorage[perm] = 1);
//   return Object.keys(objStorage);
// }

// Brute force solution
// function anagrams(string) {
//   function permutate(str, memo = []) {
//     const arr = Array.from(str);
//     let curr;

//     for (let i = 0; i < arr.length; i++) {
//       curr = arr.splice(i, 1);
//       if (!arr.length) result.push(memo.concat(curr));
//       permutate(arr.slice(), memo.concat(curr));
//       arr.splice(i, 0, curr[0]);
//     }
//   }

//   const result = [];
//   permutate(string);
//   return result;
// }

function anagrams(string) {
 // Store results in object for constant lookup time
  const results = {};
  
  // Driver function for getting perms
  function getPerms(str, cur = '') {
    // Base case: If we have used all elements from str AND we haven't stored this anagram already, save anagram as key. Value does not matter.
    if (str === '' && results[cur] === undefined) return results[cur] = true;
    
    for (let i = 0; i < str.length; i++) {
      // Take letter
      const selected = str.slice(i, i + 1);

      // Store the rest of the letters for the next call
      const rest = str.slice(0, i) + str.slice(i + 1);
      
      // Pass the leftover letters and the built up current string to a recursive call
      getPerms(rest, cur + selected);
    }

    return null;
  }
  
 getPerms(string);
 return Object.keys(results);
}

console.log(anagrams('abc'));
console.log(anagrams('aac'));

module.exports = anagrams;

