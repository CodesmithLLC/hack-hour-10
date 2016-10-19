/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
if (array === null || array.length < 3) {
  return 0;
}
else if (array.length === 3) {
  return array.reduce((a, b) => a * b);
}

let largestNum = Math.max(...array);
array.splice(array.indexOf(largestNum), 1);
let secondLargestNum = Math.max(...array);
let minNum = Math.min(...array);
array.splice(array.indexOf(minNum), 1);
let secondMinNum = Math.min(...array);
array.splice(array.indexOf(secondLargestNum), 1);
let thirdLargestNum = Math.max(...array);
array.splice(array.indexOf(secondMinNum), 1);

return largestNum * secondLargestNum * thirdLargestNum > minNum * secondMinNum * largestNum ?
  largestNum * secondLargestNum * thirdLargestNum :
  minNum * secondMinNum * largestNum;
}




module.exports = highestProduct;
