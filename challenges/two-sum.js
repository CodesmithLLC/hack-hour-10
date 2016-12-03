/**
 * Given an array, determine if there are two
 * numbers that sum up to the target value.
 *
 * O(n) time and O(n) space.
 *
 * @param {Array} array
 * @param {number} target
 * @return {boolean}
 */
function twoSum(array, target) {
  const cache = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i], diff = target - num;
    if (cache[num] === diff) return true;
    cache[diff] = num;
  }
  return false;
}

module.exports = twoSum;
