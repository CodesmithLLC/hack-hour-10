/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const finder = {};
  var final = false;
  for (var i = 0; i < arr.length; i++) {
    var diff = n - arr[i];
     console.log(finder)
    if(finder[diff] !== i && finder[diff] !== undefined) return true
    if (finder[diff] === undefined) finder[diff] = i;
  }
  console.log(finder)
  return false;
}

module.exports = twoSum;


console.log(twoSum([6, 5, 3, 9], 10))