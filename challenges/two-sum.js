/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // for (let i = 0; i < arr.length; i++) {
  //   let without = arr.slice();
  //   without.splice(i, 1);

  //   for (let j = 0; j < without.length; j++) {
  //     if (arr[i] + without[j] === n) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  let store = {};
  let toSum = [];

  for (let i = 0; i < arr.length; i++) {
    store[n - arr[i]] = i;
    if (toSum.length < 2) return false;
    if (store[arr[i]] !== undefined || i === arr.length - 1) {
      toSum[0] = arr[i];
      toSum[1] = arr[store[arr[i]]]
      return toSum[0] + toSum[1] === n;
    }
    
  }
}

console.log(twoSum([1,2,3], 2));

module.exports = twoSum;
