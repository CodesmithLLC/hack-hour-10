/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr.length) return 0;
  let sum = 0;
  const possibles = [];
  while (arr[arr.length-1] <= 0 || arr[0] <= 0){
    if (arr[arr.length-1] <= 0) arr.pop();
    if (arr[0] <= 0) arr.shift();
  }
  let i = 0;
  while (i < arr.length){
    possibles.push(arr.slice(i).reduce((a,b)=> a + b ));
    i++
  }
  console.log(Math.max.apply(null,possibles));
  return Math.max.apply(null, possibles)
}


maxSubarray([15,20,-5,10]);
module.exports = maxSubarray;
