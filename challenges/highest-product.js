/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let negArr = array.sort().slice(0, 2);
  let posArr = array.sort((a, b) => { return b - a }).slice(0, 3);
  if (negArr.reduce((a, c) => a * c) > posArr.slice(0, 2).reduce((a, c) => a * c)) {
    return negArr.concat(posArr[2]).reduce((a, c) => a * c);
  }
  else return posArr.reduce((acc, curr) => { return acc * curr });
}


module.exports = highestProduct;
