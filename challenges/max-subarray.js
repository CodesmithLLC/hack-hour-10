/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

 function maxSubarray(arr) {

 	if (arr.length < 1) return 0

   let sum = 0;
   let maxSum = 0;
   let len = arr.length;
   let count = 0;

   while(len){
   	sum = sum + arr[count];
     if (sum > maxSum) maxSum = sum;
     len--
     count++
   }

   arr.shift();
   let tempSum = maxSubarray(arr);
   if (tempSum > maxSum) maxSum = tempSum;

  return maxSum;
 }

module.exports = maxSubarray;
