/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // Store a cache of differences as we iterate through the array
  // and subtract it from n
  // We then need to check if there is a number in our cache that
  // contains the currently iterated value
  // If so, then we know there exist a number

  const store = {};
  let found = false;

  arr.forEach(val => {
    if (!store[val]) store[n - val] = true;
    else found = true;
  });

  return found;
}

module.exports = twoSum;
