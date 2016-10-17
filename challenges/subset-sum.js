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
  
  function recurse(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    if (sum === target) return true;
    if (arr.length === 0) return false;

    for (let i = 0; i < arr.length; i++) {
      let newArr = arr.slice();
      newArr.splice(i, 1);
      if (recurse(newArr), sum) return true;
    }
    return false;
  }

  
  return recurse(array);
}


// test cases
console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
subsetSum([8, 2, 4, 12], 13) // -> false
console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6

// console.log(subsetSum([2, 3, 4], 5));
// console.log(subsetSum([3, 7, 4, 2], 5));

module.exports = subsetSum;



// try jimmy's sum accumulation
// function subsetSum(array, target) {
  
//   function recurse(arr, sum) {
//     let sum = arr.reduce((a, b) => a + b, 0);
//     if (sum === target) return true;
//     if (arr.length === 0) return false;

//     for (let i = 0; i < arr.length; i++) {
//       let newArr = arr.slice();
//       newArr.splice(i, 1);
//       if (recurse(newArr), sum + arr[i]) return true;
//     }
//     return false;
//   }

  
//   return recurse(array, 0);
// }