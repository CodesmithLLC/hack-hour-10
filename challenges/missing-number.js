/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/

function missingNum(arr) {

  // Represents last value for arithmetic sum formula
  const rangeLength = arr.length + 1;

  // Employ arithmetic sequence sum formula
  const rangeSum = rangeLength * (1 + rangeLength) / 2;

  // Add all values in array
  const arraySum = arr.reduce((sum, num) => sum + num, 0);

  // Difference represents missing number!
  return rangeSum - arraySum;
}

// NOTE: Does not work if highest value is missing
// function missingNum(arr) {
//   if (!arr.length) return 1;
//   let highest = 0;
//   const total = arr.reduce((sum, num, index) => {
//     if (num > highest) highest = num;
//     return sum + num - (index + 1);
//   }, 0);

//   return highest - total;
// }

// console.log(missingNum([1, 2, 3, 4])); // 5
// console.log(missingNum([1, 5, 4, 3, 6])); //2
// console.log(missingNum([1, 3, 2, 4, 5, 7, 8, 9, 11, 10])); // 6
module.exports = missingNum;