/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let highest = 0;
  
  function find(array, product, counter, start) {
    if (counter === 3) {
      if (highest < product) { highest = product }
      return;
    }
    
    for(var i = start; i < array.length; i++) {
      find(array, product * array[i], counter + 1, i + 1);
    }
  }
  
  find(array, 1, 0, 0);
  return highest;
}


module.exports = highestProduct;
