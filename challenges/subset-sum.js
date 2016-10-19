/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// function subsetSum(array, target) {
//   let sums = [];
//   let found = false;
//   let len = array.length;
//   let sum = 0;

//   if (array[0] === undefined || target === undefined) return false;
//   function perms(count, sum) {
//     if (count === len) return sums.push(sum)
//     for (let i = 0; i < len; i++) {
//       sums.push(sum);
//       perms(count + 1, sum + array[i]);
//     }
//   }
//   perms(0, sum);

//   sums.forEach(num => {
//     if (num === target) found = true;
//   });
//   return found;
// }

function subsetSum(array, target) {
  //hack hour sol
  if (!target) return true;
  if (!array.length) return false;
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
}

console.log(subsetSum([3, 7, 4, 2], 5));
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
console.log(subsetSum([8, 2, 4, 12], 13));
console.log(subsetSum([8, -2, 1, -3], 6));
 
module.exports = subsetSum;

