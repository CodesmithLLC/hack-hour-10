/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// O(n^2)
// function twoSum(arr, n) {
//   // Validations
//   if (typeof n !== 'number') { return NaN; }
//   if (!Array.isArray(arr)) { return undefined }
//   if (arr.length < 2) { return false; }
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n ) {
//         return true;
//       };
//     }
//   }
//   return false;
// }

// O(n) solution
function twoSum(arr, n) {
  // Validations
  if (typeof n !== 'number') { return NaN; }
  if (!Array.isArray(arr)) { return undefined }
  if (arr.length < 2) { return false; }
  const cache = {};
  
  for (let i = 1; i < arr.length; i++) {
    cache[arr[i -1]] = true;
    const diff = n - arr[i];
    if ( cache[diff] ) { return true; }
  }
  return false;
}

// console.log(twoSum([3, 4, 1, 2], 3));

module.exports = twoSum;
