/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    let sortedArr = array.sort(function(a,b) {
      return a-b;
    });

    let product1 = 1;
    let product2 = 1;

    if (sortedArr.length < 3) {
      return 0;
    } else {
      for (let i =0; i<3; i++) {
        product1 *= sortedArr[sortedArr.length -1 -i];
      }
      if (sortedArr[0] < 0 && sortedArr[1] < 0) {
        product2 = sortedArr[0] * sortedArr[1] * sortedArr[sortedArr.length -1];
      }
     }

    if (product1 < product2) {
      return product2;
    } else {
      return product1;
    }
}


module.exports = highestProduct;
