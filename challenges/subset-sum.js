/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  if (array.length === 0) return false;
  if (array.some(elem => elem === target)) return true; // O(n)

  // For each element, recursively sum the first elem of array with each other
  // element of the array. With each recursive call the passed array should exclude
  // the previous first element of the array.

  // An array of all possible sums is constructed.

  // The array of all possible sums is iterated through.

  // If the target is found, return true, otherwise false;


  function recurseSum(arr, output) {

    const output = [];

    return output;
    
    // if (arr.length === 1) return arr[0];
    // const sums = [];
    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = 1; j < arr.length; i++) {
    //     sums.push(arr[i] + arr[j]);
    //   }
    // }
    // console.log(arr[0], arr.slice(1))
    // console.log(sums);
    // return sums;
    // subarr.reduce((sums, elem, index, arr) => {
    //   if (index === 0) return [elem];
    //   return sums.push(recurseSum(arr.slice(1)))
    // })
  }

  const results = recurseSum(array);
  console.log(results);
}

console.log(subsetSum([0, 3], 3));
subsetSum([3, 34, 4, 12, 5, 12], 32)


module.exports = subsetSum;
