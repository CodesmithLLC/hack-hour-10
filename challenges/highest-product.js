/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
"use strict";

function highestProduct(array) {
  if (!array) return 0;
  if (array.length <= 3) return array.reduce((a,b) => {return a*b}, 1);

  let products = {};
  highestProduct(array, 1, 0);
  let productValues = Object.keys(products).map((element) => {return parseInt(element);});

  return Math.max.apply(null, productValues);

  function highestProduct(array, runningTotal, depth){
    if (depth === 3){
      products[runningTotal] = 0;
    }
    for (let i = 0; i < array.length; ++i){
      let newArr = array.slice();
      let currValue = newArr.splice(i,1);
      highestProduct(newArr, currValue * runningTotal, depth + 1);
    }
  }
}

module.exports = highestProduct;
