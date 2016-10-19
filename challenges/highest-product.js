/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // What if it is an empty array
  if (array.length < 1) return;

  // Basically grab the three highest numbers from the array and multiply them together
  // We need a way to always replace the least of the three numbers
  const nums = [array[0] || 1, array[1] || 1, array[2] || 1];
  for (let i = 3; i < array.length; i++) {
    // Need a way to track where the min value is so we can replace that value only
    // with a higher one
    const pxOfMin = findMin(nums);
    if (array[i] > nums[pxOfMin]) nums[pxOfMin] = array[i];
  }

  // Helper
  // Get the position of the lowest value
  function findMin(values) {
    let min = values[0], pxOfMin = 0;
    for (let i = 1; i < 3; i++) {
      if (values[i] < min) {
        min = values[i];
        pxOfMin = i;
      }
    }
    return pxOfMin;
  }

  // Multiply the three numbers together
  return nums.reduce((a, b) => a * b);
}

module.exports = highestProduct;
